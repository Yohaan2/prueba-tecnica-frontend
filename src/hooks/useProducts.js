import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { getProducts } from '../modules/products';

export const useGetAllProducts = ({start, limit}) => {
  const data = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts({start, limit}),
    refetchOnWindowFocus: false,
  })
  return data;
};
