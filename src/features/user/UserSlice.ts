import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface InitialState {
  user: IUser | null;
}

const initialState: InitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, payload: PayloadAction<any>) {
      state.user = payload.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
