import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _getProfile } from "../../services/profileService";

const initialState = {
  data: null,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getProfile = createAsyncThunk(
  "user/profile",
  async (id, { rejectWithValue }) => {
    try {
      const response = await _getProfile(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload.success ? true : false;
        state.data = payload;
      })
      .addCase(getProfile.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = payload.success ? true : false;
        state.message = payload;
        state.data = null;
      });
  },
});

export default profileSlice;
