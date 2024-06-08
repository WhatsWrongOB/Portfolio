import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authentication: false,
};

const authSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.authentication = true;
    },
    signUp: (state, action) => {
      state.authentication - false;
    },
  },
});

export const {signIn,signUp} = authSlice.actions;

export default authSlice.reducer;
