import axios from "axios";
const API = "http://localhost:3000";
export const getOrders = async () => {
  const response = await axios.get(`${API}/orders`);
  return response.data;
};
export const createOrder = async (order) => {
  const response = await axios.post(
    `${API}/orders`,
    order
  );
  return response.data;
};