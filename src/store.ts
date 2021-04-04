import { combineReducers, configureStore } from "@reduxjs/toolkit";
import boardReducer from "./features/board/BoardSlice";
import listReducer from "./features/list/ListSlice";
import cardReducer from "./features/card/CardSlice";
import authReducer from "./features/auth/AuthSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  board: boardReducer,
  list: listReducer,
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
