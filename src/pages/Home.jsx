import CardProducts from "../components/CardProducts";
import { useGetAllProducts } from "../hooks/useProducts";

export default function Home() {
  const { data: products, isLoading } = useGetAllProducts({ start: 0, limit: 10 });
  console.log(products)
  return (
    <>
      <h1>React App</h1>
      {isLoading && <p>Loading...</p>}
        <CardProducts 
          products={products}
        />
    </>
  )
}