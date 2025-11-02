import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-2 rounded-lg hover:bg-red-400 ${
          isActive ? "bg-red-400 text-white" : "bg-transparent"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 p-8">
      <h2 className="text-2xl">Navbar</h2>
      <nav className="flex flex-row gap-6">
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
        <NavItem to="/posts" label="Posts" />
        <NavItem to="/users" label="Users" />
      </nav>
    </div>
  );
};

export default Navbar;
