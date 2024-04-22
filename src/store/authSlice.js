import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  status: false,
};

const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData;
      state.status = true;
    },
    logout: (state, actions) => {
      state.userData = null;
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
