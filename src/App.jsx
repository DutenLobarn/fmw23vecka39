import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGa from "react-ga4";

import ProductList from "./components/ProductList";
import ProductPage from "./components/ProductPage";

const TRACKING_ID = "G-9SVXN53H8H";

ReactGa.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGa.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
