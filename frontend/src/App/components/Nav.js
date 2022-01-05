import React from 'react'
import { NavLink } from 'react-router-dom' 

export default function Nav() {
  return (
    <nav>
    <ul className="nav__container">
      <NavLink className="nav__item" exact to="/england">England</NavLink>
      <NavLink className="nav__item" exact to="/spain">Spain</NavLink>
      <NavLink className="nav__item" exact to="/italy">Italy</NavLink>
      <NavLink className="nav__item" exact to="/france">France</NavLink>
      <NavLink className="nav__item" exact to="/portugal">Portugal</NavLink>
    </ul>
    </nav>
  )
}
