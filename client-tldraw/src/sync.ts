import { Editor } from "@tldraw/tldraw";
import { useRef } from "react";

export class TldrawSync {
  editor: Editor
  constructor(editor: Editor) {
    this.editor = editor;

    this.editor.store.onAfterChange = (_, next) => {
      if (next.typeName === "pointer") return
      if (next.typeName === "instance") return
      this.write()
      return;
    }
  }
  write() {
    const canvasNodes = []
    for (const shape of this.editor.store.allRecords()) {
      if (shape.typeName === "shape") {
        const geometry = this.editor.getShapeGeometry(shape)
        canvasNodes.push({
          id: shape.id,
          x: shape.x,
          y: shape.y,
          width: geometry.center.x * 2,
          height: geometry.center.y * 2,
          type: "text",
          text: shape.props.text ?? ""
        })
      }
    }

    const canvasData = {
      nodes: canvasNodes,
      edges: []
    }

    fetch('http://localhost:3000/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(canvasData)
    })
      .then(response => response.json())
      .then()
      .catch(error => console.log(error));
  }
}
