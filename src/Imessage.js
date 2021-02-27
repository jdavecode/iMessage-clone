import React from "react";
import Chat from "./Chat";
import SideBar from "./SideBar";
import "./Imessage.css";

const Imessage = () => {
  return (
    <div className="Imessage">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Imessage;
