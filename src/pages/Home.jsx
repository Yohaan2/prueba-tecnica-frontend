import CardProducts from "../components/home/CardProducts";
import { useGetAllProducts } from "../hooks/useProducts";
import styles from '../components/home/Home.module.css'
import Filters from "../components/home/Filters";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

export default function Home() {
  const [ nameSearch, setNameSearch ] = useState(null);
  const { data: products, isLoading, refetch  } = useGetAllProducts({ start: 0, limit: 12, title: nameSearch?.title, category: nameSearch?.category});

  useEffect(() => {
    if(nameSearch?.name?.length === 0 ) {
      refetch()
    }
  }, [nameSearch, refetch])

  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <Filters
          setNameSearch={setNameSearch}
        />
        <div className={styles['cards-container']}>
        {isLoading && <span className={styles['loader']}></span>}
          <CardProducts 
            products={products}
          />
          
          <Pagination />
        </div>
      </div>
    </div>
  )
}