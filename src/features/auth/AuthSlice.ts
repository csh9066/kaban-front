import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../user/types";

interface InitialState {
  me: IUser | null;
}

const initialState: InitialState = {
  me: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setMe(state, payload: PayloadAction<IUser>) {
      state.me = payload.payload;
    },
    initializeAuth(state) {
      state = initialState;
    },
  },
});

export const { setMe, initializeAuth } = userSlice.actions;

export default userSlice.reducer;
