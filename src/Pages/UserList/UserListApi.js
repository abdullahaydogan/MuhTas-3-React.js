// UserListApi.js
import axios from 'axios';

const API_URL = 'https://localhost:7079/api/User'; // Your API endpoint

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`); // Fetch user by ID
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`); // Delete user by ID
};
