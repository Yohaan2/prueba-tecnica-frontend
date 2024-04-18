import {
  useQuery,
} from '@tanstack/react-query';
import { getProducts } from '../modules/products';

export const useGetAllProducts = ({start, limit, title, category }) => {
  const params = { start, limit, title, category };
  const data = useQuery({
    queryKey: ['products', title, category],
    queryFn: () => getProducts(params),
    refetchOnWindowFocus: false,
  })
  return data;
};
