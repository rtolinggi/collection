import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  _getSession,
  _signIn,
  _signOut,
  _signUp,
} from "../../services/authService";

const getAuthFromLocalStorage = () => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));
  if (isAuth) {
    return true;
  }
  return false;
};

const initialState = {
  isAuth: getAuthFromLocalStorage(),
  entities: null,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const signUp = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await _signUp(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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

export const signOut = createAsyncThunk(
  "auth/logout",
  async (data, { rejectWithValue }) => {
    try {
      const response = await _signOut(data);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

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
      localStorage.setItem("isAuth", "false");
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

    // Register
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload.success ? true : false;
        state.entities = payload;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = payload;
      });

    // Session
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

    // Logout
    builder
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload.success ? true : false;
        state.entities = payload;
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = payload;
      });
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice;
