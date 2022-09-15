import { configureStore } from "@reduxjs/toolkit";
import { initialState, rootReducer } from "./reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [thunk],
});

export default store;