import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("text_editor", (text) => {
    socket.broadcast.emit("text_editor_clients", text)
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente ${socket.id} foi desconectado! Motivo: ${motivo}`);
  });

});

io.on("connection", (socket) => {
  socket.on("dados_usuario", (dados) => {
    socket.broadcast.emit("dados_usuario_clientes", dados);
  })
})
