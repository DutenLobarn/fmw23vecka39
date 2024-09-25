import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-5SF6XGCX",
};

TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
