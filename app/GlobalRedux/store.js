"use client";

import { configureStore } from "@reduxjs/toolkit";
import SignUpReducer from "./Features/user/userSlice";
import basketReducer from "./Features/basket/basketSlice";

export const store = configureStore({
  reducer: {
    SignUpPage: SignUpReducer,
    basket: basketReducer,
  },
});
