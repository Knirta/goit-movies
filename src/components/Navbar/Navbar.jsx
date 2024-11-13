import { NavLink } from "react-router-dom";
import Container from "../Container";
import clsx from "clsx";
import s from "./Navbar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navbar = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
