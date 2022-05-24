import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const axiosAuth = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const _signIn = async (data) => {
  try {
    const response = await axiosAuth.post("login", data);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

const _signUp = async (data) => {
  try {
    const response = await axiosAuth.post("register", data);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

const _getSession = async (data) => {
  try {
    const response = await axiosAuth.get("login", data);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export { _signIn, _signUp, _getSession };
