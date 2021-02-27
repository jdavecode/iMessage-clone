import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: null,
    chatName: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
  },
});

export const { setChat } = ChatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;

export default ChatSlice.reducer;
