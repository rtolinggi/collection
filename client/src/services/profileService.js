import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

const axiosAuth = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const _getProfile = async (id) => {
  try {
    const response = await axiosAuth.get(id);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export { _getProfile };
