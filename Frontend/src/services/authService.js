import axios from "axios";

// Backend API Base URL
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------------------------
// Login User
// ----------------------------
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/login", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ----------------------------
// Register User
// ----------------------------
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ----------------------------
// Logout User
// ----------------------------
export const logoutUser = () => {
  localStorage.removeItem("transitUser");
  localStorage.removeItem("token");
};

// ----------------------------
// Save JWT Token
// ----------------------------
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

// ----------------------------
// Get JWT Token
// ----------------------------
export const getToken = () => {
  return localStorage.getItem("token");
};

// ----------------------------
// Check Login Status
// ----------------------------
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
