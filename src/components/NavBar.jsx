import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
      <NavLink to="/directors" className={({ isActive }) => (isActive ? "active" : undefined)}>Directors</NavLink>
      <NavLink to="/actors" className={({ isActive }) => (isActive ? "active" : undefined)}>Actors</NavLink>
    </nav>
  );
}

export default NavBar;
