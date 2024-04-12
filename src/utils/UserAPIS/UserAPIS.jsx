import axios from "axios";
import { toast } from "react-toastify";

export const backendBaseUrl = "http://localhost:5000";

export const registerUser = async (data) => {
  try {
    const response = await axios.post(
      "https://milanbackend-7gvf.onrender.com/api/register",
      data
    );
    window.localStorage.setItem("token", response.data.token);
    window.localStorage.setItem("username", response.data.username);
    window.localStorage.setItem("userId", response.data.userId);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
export const loginUser = async (data) => {
  try {
    const response = await axios.post(
      "https://milanbackend-7gvf.onrender.com/api/login",
      data
    );
    window.localStorage.setItem("token", response.data.token);
    window.localStorage.setItem("username", response.data.username);
    window.localStorage.setItem("userId", response.data.userId);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};

export const createData = async (data, token) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
      withCredintials: true,
    };
    return await axios.post(
      // "http://localhost:5000/api/create",
      "https://milanbackend-7gvf.onrender.com/api/create",
      data,
      {
        headers,
      }
    );
  } catch (error) {
    console.log(error);
    return;
  }
};
export const getdata = async () => {
  try {
    return await axios.get(
      // "http://localhost:5000/api/getdata"
      "https://milanbackend-7gvf.onrender.com/api/getdata"
    );
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
export const getUserData = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    };

    const response = await axios.get(
      `https://milanbackend-7gvf.onrender.com/api/getdata/${userId}`,
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error(error.response.data.message);
    throw error;
  }
};
export const deleteData = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return; // Return early if token is not found
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.delete(
      // `http://localhost:5000/api/delete/${id}`,
      `https://milanbackend-7gvf.onrender.com/api/delete/${id}`,
      {
        headers: headers,
      }
    );

    if (response && response.data) {
      return response.data;
    } else {
      console.error("Invalid response:", response);
      return null;
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    };
    return await axios.put(
      `https://milanbackend-7gvf.onrender.com/api//update/${id}`,
      data,
      {
        headers: headers,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const addLocation = async (data) => {
  try {
    // Retrieve username and userId from localStorage
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    };

    // Modify the data object to include username and userId
    const requestData = {
      ...data,
      username: username,
      userId: userId,
    };

    // Send the modified data object in the request
    return await axios({
      method: "post",
      url: "https://milanbackend-7gvf.onrender.com/api/addlocation",
      data: requestData,
      headers: headers,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const paymentRecive = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in localStorage");
      return;
    }
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    };
    console.log("header", headers);
    console.log("requestData", data);
    const response = await axios.post(
      // "http://localhost:5000/api/createpayment",
      "https://milanbackend-7gvf.onrender.com/api/createpayment",
      data,
      {
        headers,
      }
    );
    console.log("responseUser", response);
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
