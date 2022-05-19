import { createSlice } from "@reduxjs/toolkit";

const getAuthFromLocalStorage = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return isAuth ? true : false;
};

const initialState = {
  isLogin: getAuthFromLocalStorage(),
  user: null,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isLogin = true;
    },
    unauthenticateUser: (state) => {
      state.isLogin = false;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice;
