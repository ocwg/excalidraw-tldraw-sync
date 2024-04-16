import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import React, { useRef } from "react";
import { ExcalidrawSync } from "../../client-excalidraw/src/sync";
import ReactDOM from "react-dom/client";
import "./index.css"

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
  return (<div className="tldraw__editor">
    <Tldraw
      onMount={(editor) => {
        sync.current = new ExcalidrawSync(editor)
      }}
    />
  </div>)
}

