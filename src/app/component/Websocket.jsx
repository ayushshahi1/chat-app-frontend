import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("ws://127.0.0.1:8000/");

const Websocket = () => {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("");

  const sendMessage = () => {
    socket.emit("send message", { message });
  };

  useEffect(() => {
    socket.on("recieve message", (data) => {
      setMessageRecieved(data.message);
    });
  }, [socket]);
  return (
    <div>
      <input
        type="text"
        placeholder="type a message ..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send message</button>

      <h1>Message:</h1>
      {messageRecieved}
    </div>
  );
};
export default Websocket;
