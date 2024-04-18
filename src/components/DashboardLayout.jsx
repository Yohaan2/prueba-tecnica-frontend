import propTypes from 'prop-types'
import styles from './DashboardLayout.module.css'
import { NavLink } from 'react-router-dom'

const DashboardLayout = ({children}) => {
  return (
    <>
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <ul className={styles['nav-ul']}>
          <li>
            <NavLink to='/home' className={styles['nav-link']}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={styles['nav-link']}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={styles['nav-link']}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
      <>{children}</>
    </>
  )
}

DashboardLayout.propTypes = {
  children: propTypes.node.isRequired,
}

export default DashboardLayout
