import styles from './CardProducts.module.css'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import Pagination from '../Pagination';

const CardProducts = ({ products }) => {
  const handleModal = (data) => {
    Swal.fire({
      title: data.title,
      text: data.description,
      width: 600,
      heightAuto: true,
      imageUrl: data.image,
      imageWidth: 300,
      imageHeight: 300,
    });
  }
  return (
    <>
    <div className={styles['cards']}>
      {
        products?.payload?.map((product, index) => (
          <div className={styles['card']} key={index} onClick={()=> handleModal(product)}>
            <img loading='lazy' src={product.image} alt={product.title} />
            <div className={styles['card-container']}>
              <h5 className={styles['text-container']}>{product.title}</h5>
              <div className={styles['price-container']}>
                <p className={styles['price']}>
                  <span className={styles['new-price']}>{product.price}$</span>{' '}
                  <span className={styles['old-price']}>236.99$</span>
                </p>
              </div>
            </div>
          </div>
        ))
      }
      {products?.payload?.length === 0 && (
        <h2 className={styles['not-found']}>No more results were found</h2>
      )}
    </div>
      <Pagination />
    </>
  )
}

CardProducts.propTypes = {
  products: PropTypes.object,
}

export default CardProducts
