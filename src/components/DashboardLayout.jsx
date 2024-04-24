import propTypes from 'prop-types'
import styles from './DashboardLayout.module.css'
import { NavLink } from 'react-router-dom'

const DashboardLayout = ({children}) => {

  return (
    <>
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <ul className={styles['nav-ul']}>
          <li className={styles['nav-li']}>
            <NavLink 
              to='/home' 
              className={({ isActive }) =>
                `${styles['nav-link']} ${isActive ? styles['active'] : ''}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/about' 
              className={({ isActive }) =>
                `${styles['nav-link']} ${isActive ? styles['active'] : ''}`
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/contact' 
              className={({ isActive }) =>
                `${styles['nav-link']} ${isActive ? styles['active'] : ''}`
              }>
              Contact
            </NavLink>
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
