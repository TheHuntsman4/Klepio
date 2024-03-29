import { NavDesktop, NavMobile } from ".";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return <>{isDesktopOrLaptop ? <NavDesktop /> : <NavMobile />}</>;
};

export default Navbar;
