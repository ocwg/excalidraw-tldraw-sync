
import React, { useRef } from "react";
import { ExcalidrawSync } from "./sync";
import ReactDOM from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";
import "./style.css"

const root = document.getElementById("root")


if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

function App() {
  const sync = useRef<ExcalidrawSync | null>(null);
  return <div id="excalidraw-container">
    <Excalidraw />
  </div>
}

