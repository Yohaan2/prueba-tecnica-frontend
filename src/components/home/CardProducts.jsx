import styles from './CardProducts.module.css'
import PropTypes from 'prop-types';

const CardProducts = ({ products }) => {

  return (
    <>
    <div className={styles['container']}>
      {
        products?.payload?.map((product, index) => (
          <div className={styles['items']} key={index}>
            <img loading='lazy' src={product.image} alt={product.title} />
            <div className={styles['items-container']}>
              <h5 className={styles['text-container']}>{product.title}</h5>
              <div className={styles['price-container']}>
                <p className={styles['new-price']}>{product.price}$</p>
                <p className={styles['old-price']}>
                  236.99$
                </p>
              </div>
              <button className={styles['add-card-button']}>Agregar al Carrito</button>
            </div>
          </div>
        ))
      }
    </div>
      {products?.payload?.length === 0 && (
        <h2 className={styles['not-found']}>No more results were found</h2>
      )}
    </>
  )
}

CardProducts.propTypes = {
  products: PropTypes.object,
}

export default CardProducts
