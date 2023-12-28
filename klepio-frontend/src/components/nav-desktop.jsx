import React from "react";
import {Link} from 'react-router-dom';
import KlepioLogo from "../assets/nonicons/KlepioLogoWhite.svg";

const NavDesktop = () => {
  return (
    // <nav className="mt-4 flex items-center justify-between px-12 py-8 bg-black text-white container mx-auto rounded-full drop-shadow-lg"></nav>
    <nav className="flex items-center justify-between px-12 py-8 bg-black text-white">
      <img src={KlepioLogo} alt="Logo" width={150} />
      <div className="flex gap-x-4 text-xl font-bold">
        <Link to="/home">Home</Link>
        <Link to="/">DentAI</Link>
        <Link to="/">About Us</Link>
      </div>
    </nav>
  );
};

export default NavDesktop;