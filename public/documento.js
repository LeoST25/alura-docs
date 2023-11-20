import { emitirTextoEditor } from "./socket-front-documento.js";

const textEditor = document.getElementById("editor-texto");

textEditor.addEventListener("keyup", () => {
  emitirTextoEditor(textEditor.value);
});

function updateText(text) {
  textEditor.value = text;
}

export { updateText };