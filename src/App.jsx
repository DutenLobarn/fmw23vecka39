import { useEffect } from "react";

import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
// Pages
import Home from "./Home";
import About from "./About";
const TRACKING_ID = "G-5V6QVXEJNQ"; // Ersätt med ditt eget Measurement ID
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
