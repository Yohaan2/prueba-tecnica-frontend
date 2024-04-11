import axios from "../utils/http";

export const getProducts = async (query) => {
  const response = await axios.get('/api/products');
  return response;
};