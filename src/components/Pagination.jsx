//import PropTypes from 'prop-types'
import styles from './Pagination.module.css'

const Pagination = () => {
  return (
    <>
      <nav className={styles["pagination"]}>
        <a href="#" className={styles ["pagination-previous"]}>Previous</a>
        
        <ul className={styles["pagination-list"]}>
          <li>
            <a href="#" className={styles["pagination-link"]}>1</a>
            </li>
          <li>
            <span className={styles["pagination-ellipsis"]}>&hellip;</span>
            </li>
          <li>
            <a href="#" className={styles["pagination-link"]}>45</a>
            </li>
          <li>
            <a
            href='#'
              className={styles["pagination-link"]}
            >46
            </a>
          </li>
          <li>
            <a href="#" className={styles["pagination-link"]}>47</a>
            </li>
          <li>
            <span className={styles["pagination-ellipsis"]}>&hellip;</span>
            </li>
          <li>
            <a href="#" className={styles["pagination-link"]}>86</a>
            </li>
        </ul>

        <a href="#" className={styles["pagination-next"]}>Next Page</a>
      </nav>
    </>
  )
}

Pagination.propTypes = {

}

export default Pagination
