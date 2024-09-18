"use client";
import React, { useState, useEffect } from "react";
import Websocket from "@/app/component/Websocket";

function App() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://127.0.0.1:8000/");
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
    };

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleSendMessage = () => {
    console.log("socket", socket);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message }));
      console.log("Message sent:", message);
    } else {
      console.log("WebSocket is not open");
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message...."
      />
      <button onClick={handleSendMessage}>Send Message</button> */}
      <Websocket />
    </div>
  );
}

export default App;
