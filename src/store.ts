import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/card/cardSlice";
import listReducer from "./features/list/listSlice";

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
