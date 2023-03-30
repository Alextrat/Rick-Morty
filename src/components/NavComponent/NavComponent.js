import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css';


const NavComponent = () => (
  
  <nav className={styles.Nav}>
   <ul>
    <li><Link className="nav-link" to ="/">Home</Link></li>
    <li><Link className="nav-link" to ="/characters">Personajes</Link></li>
    <li><Link className="nav-link" to ="/locations">Localizaciones</Link></li>
    <li><Link className="nav-link" to ="/episodes">Capítulos</Link></li>
    </ul>
  </nav>

);

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
