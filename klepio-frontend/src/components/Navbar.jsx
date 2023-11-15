import { NavDesktop, NavMobile } from "../components";
import KlepioLogoWhite from "../assets/nonicons/KlepioLogoWhite.svg";
import { useMediaQuery } from "react-responsive";

const Topbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <div className="fixed top-0 left-0 right-0 bg-neutral-950 border-b border-neutral-700 text-white">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">
          <img src={KlepioLogoWhite} width={isDesktopOrLaptop ? 220 : 100} className="ml-12" />
        </span>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};
export default Topbar;
