import { configureStore } from "@reduxjs/toolkit";
import authSlice  from './features/AuthSlice';

export default configureStore(
    {
      reducer: {
        auth: authSlice,
      }
    }
)