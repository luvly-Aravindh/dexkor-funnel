import { Routes, Route } from "react-router-dom";
import OptinPage from "./pages/OptinPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";

/* Funnel routes. The opt-in is the entry; each page's internal links and
 * the opt-in's post-submit redirect are routed client-side (see lib/spaNav).
 * Query params (?n, ?leak, ?p ...) are preserved across navigation. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OptinPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
    </Routes>
  );
}
