import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import svg from "../assets/caninepedia.svg";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="text text-color flex justify-between items-center m-4  ">
        <div>
          <NavLink to="/" className="navlink">
            Caninepedia
            <img
              src={svg}
              className="inline w-6 h-4 lg:w-7 lg:h-5 2xl:w-10 2xl:h-8 mb-1"
            />
          </NavLink>
        </div>
        <div>
          <NavLink to="about" className="navlink">
            About
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
