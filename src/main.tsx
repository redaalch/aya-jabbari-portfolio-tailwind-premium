import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "motion/react";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </LanguageProvider>
  </React.StrictMode>,
);
