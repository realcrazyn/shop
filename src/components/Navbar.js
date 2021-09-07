import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg d-flex justify-content-between">
    <NavLink exact to="/" className="nav-link">
      <div className="navbar-brand px-4">My Extra Shop</div>
    </NavLink>
    <ul className="navbar-nav px-4">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
          Main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/catalog" className="nav-link">
          Catalog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/cart" className="nav-link">
          Shopping Cart
        </NavLink>
      </li>
    </ul>
  </nav>
)
