import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./features/list/ListSlice";
import cardReducer from "./features/card/CardSlice";

const rootReducer = combineReducers({
  list: listReducer,
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
