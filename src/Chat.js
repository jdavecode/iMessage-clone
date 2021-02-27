import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectChatId, selectChatName } from "./features/ChatSlice";
import { selectUser } from "./features/UserSlice";
import Message from "./Message";
import db from "./Firebase";

import firebase from "firebase";
import FlipMove from "react-flip-move";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setmessages] = useState([]);
  const chatId = useSelector(selectChatId);
  const chatName = useSelector(selectChatName);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp",)
        .onSnapshot((snapshot) => {
          setmessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };
  return (
    <div className="Chat">
      <div className="chatHeader">
        <h4>
          To <span className="chatName">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="ChatMessage">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} id={id} contents={data} />
          ))}
        </FlipMove>
      </div>
      <div className="ChatInput">
        <form action="">
          <input
            type="text"
            placeholder="Type..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
