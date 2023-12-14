import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DiaryProvider } from "./diaryContext.jsx";
import "./index.css";
import DefaultLayouts from "./layouts/DefaultLayouts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DiaryProvider>
      <App />
    </DiaryProvider>
  </React.StrictMode>
);
