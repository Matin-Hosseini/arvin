import Logo from "../Logo/Logo";
import SearchBox from "../Search-box/Search-box";
import LoginAndShoppingCart from "../Login-and-Shopping-cart/Login-and-Shopping-cart";
import NavBar from "../Nav-bar/Nav-bar";
import './Desktop-header.css'

const DesktopHeader = () => {
  return (
    <div className="desktop-header">
      <div className="container-fluid d-flex justify-content-between align-items-center mb-3">
        <Logo />
        <SearchBox />
        <LoginAndShoppingCart />
      </div>
      <NavBar />
    </div>
  );
};

export default DesktopHeader;
