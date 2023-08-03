import "./Product-seller.css";
const ProductSeller = () => {
  return (
    <div className="row align-items-cente product-sellers__seller">
      <div className="col">
        <div className="d-flex gap-3 align-items-center">
          <div className="product-sellers__seller-logo">
            <img src="assets/logos/footerlogo2.png" alt="" />
          </div>
          <div>
            <h2 className="mb-3">دیجی کالا</h2>
            <p className="text-lg-center text-muted h5">
              <span className="text-success">100%</span>
              <span>رضایت از کالا</span>
              <span className="mx-2">|</span>
              <span>عملکرد</span>
              <span className="text-success">عالی</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="h4 text-muted">
          <i className="bi bi-truck text-danger ms-3 h3"></i>
          <span>ارسال دیجی کالا</span>
          <p>ارسال فوری (شهر تهران)</p>
        </div>
      </div>
      <div className="col">
        <div className="h4">
          <i className="bi bi-shield-check ms-3 text-muted"></i>
          <span>گارانتی 18 ماهه آنی نگر آرتین</span>
        </div>
      </div>
      <div className="col ">
        <div className="d-flex align-items-center justify-content-end gap-4 me-auto">
          <p className="m-0 ms-3">
            <span className="h4">41,000,000</span>
            <span>تومان</span>
          </p>
          <button className="h5 add-to-cart-btn w-auto px-3">افزودن به سبد</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSeller;
