import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';
import chatReducer from '../features/ChatSlice'
 

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
