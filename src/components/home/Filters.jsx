import styles from './Filters.module.css'
import { useEffect, useState } from 'react'
import PropTypes from "prop-types";

const Filters = ({setNameSearch}) => {
  const [search, setSearch] = useState({
    title: '',
    category: '',
  });

  const handleSearch = (e) => {
    setSearch((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
      if (search) {
        setNameSearch(search);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, setNameSearch]);

  return (
    <div className={styles['container']}>
      <div className={styles['container-select']}>

        <label htmlFor="search">Search:</label>
        <input 
          id='search'
          type="text" 
          className={styles['input-search']} 
          autoComplete='off' 
          name="title"
          value={search.name} 
          onChange={handleSearch} 
          placeholder="Write your products"
        />

        <label htmlFor="category">Category:</label>
        <select 
          id='category'
          className={styles['select']}
          name='category'
          value={search.category}
          onChange={handleSearch}
          >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men`s Clothing</option>
          <option value="women's clothing">Women`s Clothing</option>
        </select>
      </div>
    </div>
  )
}

Filters.propTypes = {
  setNameSearch: PropTypes.func
}

export default Filters
