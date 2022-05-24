import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getSession, _signIn } from "../../services/authService";

const getAuthFromLocalStorage = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  if (isAuth) {
    return true;
  }
  return false;
};

export const signIn = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await _signIn(data);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getSession = createAsyncThunk(
  "auth/session",
  async (data, { rejectWithValue }) => {
    try {
      const response = await _getSession(data);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  isAuth: getAuthFromLocalStorage(),
  entities: null,
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
      localStorage.setItem("isAuth", "true");
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth");
    },
  },
  extraReducers: (builder) => {
    // login
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload.success ? true : false;
        state.entities = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = payload;
      });

    // session
    builder
      .addCase(getSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSession.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = payload.isLogin ? true : false;
        state.isSuccess = payload.isLogin ? true : false;
        state.entities = payload;
      })
      .addCase(getSession.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = payload;
      });
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice;
