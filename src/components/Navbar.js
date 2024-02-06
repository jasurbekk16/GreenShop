import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="rasm yo'q" onClick={() => navigate("/")} />
      </div>
      <div className="links">
        <NavLink to="/" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink activeClassName="active-link" to="/shop">
          Shop
        </NavLink>
        <NavLink activeClassName="active-link" to="/plantcare">
          Plant Care
        </NavLink>
        <NavLink activeClassName="active-link" to="/blogs">
          Blogs
        </NavLink>
      </div>
      <div className="icons">
        <Link>
          <IoSearch />
        </Link>
        <Link>
          <RiShoppingCartLine />
        </Link>
        <button>
          <IoExitOutline /> Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
