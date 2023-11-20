import { updateText } from "./documento.js";

const socket = io();

function emitirTextoEditor (text) {
  socket.emit("text_editor", text);
}

socket.on("text_editor_clients", (text) => {
  updateText(text);
});

export { emitirTextoEditor };