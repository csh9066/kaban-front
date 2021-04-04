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
    setMe(state, payload: PayloadAction<any>) {
      state.me = payload.payload;
    },
    clearAuth(state) {
      state = initialState;
    },
  },
});

export const { setMe } = userSlice.actions;

export default userSlice.reducer;
