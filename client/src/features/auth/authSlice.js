import { createSlice } from "@reduxjs/toolkit";

const getAuthFromLocalStorage = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  return isAuth ? true : false;
};

const initialState = {
  isAuth: getAuthFromLocalStorage(),
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
      state.isAuth = true;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice;
