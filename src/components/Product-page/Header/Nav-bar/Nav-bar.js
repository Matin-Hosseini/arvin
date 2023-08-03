import HeaderLocation from "../Header-location/Header-location";
import "./Nav-bar.css";
const NavBar = () => {
  return (
    <nav className="header-nav d-flex justify-content-between algin-items-center">
      <div className="menu d-flex">
        <a
          href="#"
          className="products-category d-flex align-items-center gap-2">
          <i className="bi bi-list"></i>
          <h2 className="ps-3">دسته بندی کالاها</h2>
        </a>
        <ul className="nav-menu d-flex">
          <li>
            <a href="#">سوپرمارکت</a>
          </li>
          <li>
            <a href="#">پرفروش ترین ها</a>
          </li>
          <li>
            <a href="#">تخفیف و پیشنهادات</a>
          </li>
          <li>
            <a href="#">شگفت انگیزها</a>
          </li>
        </ul>
        <div className="d-flex align-items-center position-relative nav-menu__last-menu">
          <a href="#">سوالی دارید؟</a>
          <a href="#">در دیجیکالا بفروشید!</a>
        </div>
      </div>
      <HeaderLocation/>
    </nav>
  );
};

export default NavBar;
