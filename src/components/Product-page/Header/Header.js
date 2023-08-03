import DesktopHeader from "./Desktop-header/Desktop-header";
import MobileHeader from "./Mobile-header/Mobile-header";

const Header = () => {
  return (
    <header className="pt-3">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

export default Header;
