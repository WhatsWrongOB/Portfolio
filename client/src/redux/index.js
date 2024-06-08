import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers";
import { portfolioAPI } from "./api";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [portfolioAPI.reducerPath]: portfolioAPI.reducer
  },
  middleware: (mid) => [...mid(), portfolioAPI.middleware],
});

export default store;
