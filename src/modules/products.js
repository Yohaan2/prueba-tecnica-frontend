import axios from "../utils/http";

export const getProducts = async (params) => {
  console.log(params)
  const queryParams = {...params}
  const response = await axios.get('/api/products', {
    params: queryParams,
  });
  return response;
};
