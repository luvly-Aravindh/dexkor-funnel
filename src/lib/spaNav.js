/* Maps the funnel's static `.html` targets to SPA routes and keeps the
 * query string / hash intact, so params like ?n, ?leak, ?p flow end to end. */
const MAP = {
  optin: "/",
  landing: "/landing",
  booking: "/booking",
  thankyou: "/thankyou",
};

export function toRoute(href) {
  if (!href) return null;
  const m = String(href).match(
    /dexkor-demo-(optin|landing|booking|thankyou)\.html(\?[^#]*)?(#.*)?/
  );
  if (!m) return null;
  return MAP[m[1]] + (m[2] || "") + (m[3] || "");
}

/* Returns a nav(target) fn: routes internally when it recognises a funnel
 * page, otherwise falls back to a normal browser navigation. */
export function makeNav(navigate) {
  return (target) => {
    const r = toRoute(target);
    if (r) navigate(r);
    else if (target) window.location.href = target;
  };
}

/* Delegated click interception on a container: any <a> pointing at a funnel
 * page navigates client-side instead of doing a full page load. */
export function interceptClicks(root, navigate) {
  if (!root) return () => {};
  const onClick = (e) => {
    const a = e.target.closest && e.target.closest("a");
    if (!a || !root.contains(a)) return;
    const r = toRoute(a.getAttribute("href"));
    if (r) {
      e.preventDefault();
      navigate(r);
    }
  };
  root.addEventListener("click", onClick);
  return () => root.removeEventListener("click", onClick);
}
