import axios from "axios";

export const backendBaseUrl = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    return await axios.post(
      // "http://localhost:5000/api/register",
      "https://milanbackend-7gvf.onrender.com/api/register",
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};
export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      // "http://localhost:5000/api/Login",
      "https://milanbackend-7gvf.onrender.com/api/login",
      data
    );
    window.localStorage.setItem("token", response.data.token);
    window.localStorage.setItem("username", response.data.username);
    window.localStorage.setItem("userId", response.data.userId);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const createData = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      withCredintials: true,
    };
    return await axios.post(
      "http://localhost:5000/api/create",
      { ...data, userId },
      {
        headers,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
export const getdata = async () => {
  try {
    return await axios.get(
      // "http://localhost:5000/api/getdata"
      "https://milanbackend-7gvf.onrender.com/api/getdata"
    );
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserData = async (userId) => {
  try {
    return await axios.get(
      // `http://localhost:5000/api/getdata/${userId}`
      `https://milanbackend-7gvf.onrender.com/api/${userId}`
    );
  } catch (error) {
    console.log(error.message);
  }
};
