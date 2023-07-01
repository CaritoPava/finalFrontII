import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { ContextGlobal } from './utils/global.context';
import { ACTIONS } from './utils/actions';
// Theme
import theme from '../theme';
import styles from '../styles/navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const location = useLocation();

  const handleThemeChange = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  return (
    <nav className={styles.nav} style={theme[state.theme]}>
      <div>
        <Link to="/" style={theme[state.theme]}>
          <h1>
            <span style={{ color: '#c50404' }}>D</span>H Odonto
          </h1>
        </Link>

        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link style={theme[state.theme]} to="/">Home</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link style={theme[state.theme]} to="/contact">Contact</Link>
          </li>
          <li className={location.pathname === "/favs" ? "active" : ""}>
            <Link style={theme[state.theme]} to="/favs">Favs</Link>
          </li>
          <li>
            <button
              style={state.theme === 'light' ? theme.dark : theme.light}
              onClick={handleThemeChange}
              className={styles.buttonTheme}
            >
              {state.theme === 'light' ? '🌙' : '🌞'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar