import "./Product.css";
const Product = () => {
  return (
    <div className="single-product py-3 px-4">
      <div className="single-product__img">
        <img src="assets/images/products/iphone/iphone-1.jpg" alt="" />
      </div>
      <h2 className="single-product__name">
        گوشی موبایل سامسونگ مدل Galaxy S23 Ultra دو سیم کارت ظرفیت 512 گیگابایت
        و رم 12 گیگابایت - ویتنام
      </h2>
      <p className="text-primary h5">
      <i className="bi bi-watch"></i>
      <span>ارسال فوری</span>
      </p>
      <span className="text-danger h5">تنها 2 عدد در انبار باقی مانده</span>
      <p className="single-product__price text-left mt-4">
        <span className="h3">41,000,000</span>
        <span>تومان</span>
      </p>
    </div>
  );
};

export default Product;
