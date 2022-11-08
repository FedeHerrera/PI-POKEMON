import React from "react";
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {

  const handleReload = () => {
    if(window.location.href == 'http://localhost:3000/home'){
      window.location.reload()
    }
  }

    return (
      <nav>
        <ul className="nav">
          <li className="navList">
            <Link to='/home'><a onClick={()=>handleReload()}>Inicio</a></Link>
          </li>
          <li className="navList">
            <Link to='/newPokemon'><a>Crea un pokemon</a></Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;