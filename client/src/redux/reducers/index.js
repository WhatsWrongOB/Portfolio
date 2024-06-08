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
    logout: (state, action) => {
      state.authentication - false;
    },
  },
});

export const {signIn,logout} = authSlice.actions;

export default authSlice.reducer;
