import "./Login-and-Shopping-cart.css";

const LoginAndShoppingCart = () => {
  return (
    <div className="user-options d-flex">
      <div class="dropdown ms-2 d-flex justify-content-center align-items-center">
        <div
          class="dropdown-toggle px-3  rounded-4 ms-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <i className="bi bi-person"></i>
        </div>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="shopping-cart d-flex justify-content-center align-items-center">
        <i className="bi bi-cart px-3  rounded-4"></i>
      </div>
    </div>
  );
};

export default LoginAndShoppingCart;
