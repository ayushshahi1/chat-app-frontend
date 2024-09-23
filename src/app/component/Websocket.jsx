import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Websocket = () => {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("");

  const sendMessage = () => {
    // socket.emit("send message", { message });
  };

  useEffect(() => {
    socket.on("recieve message", (data) => {
      setMessageRecieved(data.message);
    });
  }, [socket]);
  return (
    <div className="w-[400px] h-[500px] border border-gray-300 rounded-lg shadow-lg flex flex-col">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
        <h1 className="text-lg font-semibold">Chat</h1>
      </div>

      {/* Chat display */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100 space-y-3">
        {messageRecieved && (
          <div className="bg-green-200 max-w-[75%] p-2 rounded-lg text-black self-end">
            {messageRecieved}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-3 bg-gray-200 flex items-center space-x-3 rounded-b-lg">
        <input
          type="text"
          placeholder="Type a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded-lg border focus:outline-none focus:ring focus:ring-green-500"
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Websocket;
