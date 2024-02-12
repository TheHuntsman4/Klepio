import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

import KlepioLogo from "../assets/nonicons/KlepioLogoWhite.svg";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-12 py-4 bg-black text-white">
        <img src={KlepioLogo} alt="Logo" width={220} />
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-full bg-black z-10 flex flex-col justify-center items-center text-xl font-bold text-white"
          >
            <button
              className="absolute top-0 right-0 p-4"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            <Link to="/home">Home</Link>
            <Link to="/">DentAI</Link>
            <Link to="/">About Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;
