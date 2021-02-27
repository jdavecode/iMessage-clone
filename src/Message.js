import React, { forwardRef } from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";

const Message = forwardRef( ({ id, contents }, ref) => {
  const user = useSelector(selectUser);

  const { timestamp, email, message, photo } = contents;

  return (
    <div ref={ref} className={`message ${user.email === email && "messageSender"}`}>
      <Avatar src={photo} className="messagePhoto" />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toDateString()}</small>
    </div>
  );
})

export default Message;
