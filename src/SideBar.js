import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { IconButton } from "@material-ui/core";
import "./SideBar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import db, { auth } from "./Firebase";

import SideBarChats from "./SideBarChats";

function SideBar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);

  const signOut = (e) => {
    e.preventDefault();

    auth.signOut();
  };

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt("please enter a chat name");

    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  return (
    <div className="SideBar">
      <div className="sideBarHeader">
        <Avatar src={user.photo} onClick={signOut} />
        <div className="sideBarInput">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton variant="outlined" className="sideBarButton">
          <RateReviewIcon onClick={addChat} />
        </IconButton>
      </div>

      <div className="sideBarChats">
        {chats.map(({ id, data: { chatName } }) => (
          <SideBarChats key={id} id={id} chatName={chatName} />
        ))}

      </div>
    </div>
  );
}

export default SideBar;
