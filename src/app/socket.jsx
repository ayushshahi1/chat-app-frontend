import React from "react";
import io from "socket.io-client";

const ws = io("ws://127.0.0.1:8000/");

const socket = () => {
  const sendMessage = () => {
    ws.emit("send message", { message: hello });
  };
  return (
    <div>
      <input type="text" placeholder="type a message ..." />
      <button onClick={sendMessage}>send message</button>
    </div>
  );
};

export default socket;
