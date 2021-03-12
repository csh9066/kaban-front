import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import listReducer from "./listSlice";

const rootReducer = combineReducers({
  list: listReducer,
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
