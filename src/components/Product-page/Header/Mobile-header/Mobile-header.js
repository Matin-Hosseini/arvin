import HeaderLocation from "../Header-location/Header-location";
import LoginAndShoppingCart from "../Login-and-Shopping-cart/Login-and-Shopping-cart";
import Logo from "../Logo/Logo";
import SearchBox from "../Search-box/Search-box";
import "./Mobile-header.css";

const MobileHeader = () => {
  return (
    <div className="mobile-header container-fluid">
      <div className="  d-flex justify-content-between align-items-center">
        <i className="bi bi-list h2"></i>
        <Logo />
        <i className="bi bi-question-square h2"></i>
      </div>
      <div className="d-flex justify-content-between my-4">
        <SearchBox />
        <LoginAndShoppingCart />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <HeaderLocation/>
        <i className="bi bi-chevron-left"></i>
      </div>
    </div>
  );
};
export default MobileHeader;
