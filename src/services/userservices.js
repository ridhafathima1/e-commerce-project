import axios from "axios";
const API = "http://localhost:3000";
export const getUsers = async () => {
  const response = await axios.get(`${API}/users`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await axios.post(
    `${API}/users`,
    user
  );
  return response.data;
};