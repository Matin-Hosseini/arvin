import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Product-info.css";
import SwiperImage from "./swiper-image/Swiper-image";
const ProductInfo = () => {
  return (
    <section className="row container-fluid mt-5">
      <div className="col-lg-4 product-image">
        <div className="d-lg-none">
          <ul className="product-image-icons d-flex justify-content-end gap-3">
            <li>
              <i className="bi bi-heart"></i>
            </li>
            <li>
              <i className="bi bi-share"></i>
            </li>
            <li>
              <i className="bi bi-alarm"></i>
            </li>
            <li>
              <i className="bi bi-graph-up"></i>
            </li>
            <li>
              <i className="bi bi-vr"></i>
            </li>
            <li>
              <i className="bi bi-list-ul"></i>
            </li>
          </ul>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-2.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-3.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-4.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-5.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-6.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-7.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src="assets/images/products/iphone/iphone-8.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="d-none d-lg-block">
          <div className="d-flex">
            <ul className="product-image-icons">
              <li>
                <i className="bi bi-heart"></i>
              </li>
              <li>
                <i className="bi bi-share"></i>
              </li>
              <li>
                <i className="bi bi-alarm"></i>
              </li>
              <li>
                <i className="bi bi-graph-up"></i>
              </li>
              <li>
                <i className="bi bi-vr"></i>
              </li>
              <li>
                <i className="bi bi-list-ul"></i>
              </li>
            </ul>
            <div>
              <img src="assets/images/products/iphone/iphone-1.jpg" alt="" />
            </div>
          </div>
          <div className="d-flex">
            <div className="product-other-images">
              <img src="assets/images/products/iphone/iphone-2.jpg" alt="" />
            </div>
            <div className="product-other-images">
              <img src="assets/images/products/iphone/iphone-3.jpg" alt="" />
            </div>
            <div className="product-other-images">
              <img src="assets/images/products/iphone/iphone-4.jpg" alt="" />
            </div>
            <div className="product-other-images">
              <img src="assets/images/products/iphone/iphone-5.jpg" alt="" />
            </div>
            <div className="product-other-images">
              <img src="assets/images/products/iphone/iphone-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 p-0 product-name ">
        <ul className="bread-crumb product-bread-crumb">
          <li>اپل</li>
          <li>گوشی موبایل اپل</li>
        </ul>
        <h2>
          گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم
          4 گیگابایت - نات اکتیو
        </h2>
        <div className="row">
          <div className="col-lg-7  product-options">
            <h2 className="product-english-name">
              Apple iPhone 13 CH Dual SIM 128GB And 4GB RAM Mobile Phone - Not
              Activate
            </h2>
            <ul className="product-ratings">
              <li>
                <i className="bi bi-star-fill"></i>
                <span>4.4</span>
                <span className="text-muted">(1574)</span>
              </li>
              <li>
                <span>2843 دیدگاه</span>
              </li>
              <li>
                <span>869 پرسش</span>
              </li>
            </ul>
            <div>
              <i className="bi bi-hand-thumbs-up text-success"></i>
              <span className="h5">
                ۹۱% (۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند
              </span>
            </div>
            <div>
              <span>رنگ: </span>
              <span>مشکی</span>
              <ul className="product-colors d-flex gap-2">
                <li className="border rounded-pill d-flex rounded-lg-circle active">
                  <span className="color m-lg-0" background="#000"></span>
                  <span className="name d-lg-none ">مشکی</span>
                </li>
                <li className="border rounded-pill rounded-lg-circle d-flex">
                  <span className="color m-lg-0 pink" background="#000"></span>
                  <span className="name d-lg-none ">صورتی</span>
                </li>
                <li className="border rounded-pill rounded-lg-circle d-flex">
                  <span className="color m-lg-0 red" background="#000"></span>
                  <span className="name d-lg-none ">قرمز</span>
                </li>
              </ul>
            </div>

            <div className="insurance ">
              <span>بیمه</span>
              <div className="d-flex align-items-center gap-3 border rounded-4 px-3">
                <span className="insurance-button"></span>
                <div className="flex-grow-1 insurance-content py-3 pe-3">
                  <p>بیمه تجهیزات دیجیتال - بیمه پارسیان</p>
                  <div className="d-flex justify-content-between algin-items-center">
                    <span>1,142,320 تومان</span>
                    <a href="#" className="text-primary">
                      <span>جزییات</span>
                      <i className="bi bi-chevron-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="features">
              <span className="h3">ویژگی ها</span>
              <ul className="features-list">
                <li>
                  <span className="text-muted">فناوری صفحه نمایش: </span>
                  <span className="feature-value">Super Retina XDR OLED</span>
                </li>
                <li>
                  <span className="text-muted">اندازه: </span>
                  <span className="feature-value">6.1</span>
                </li>
                <li>
                  <span className="text-muted">رزولوشن عکس: </span>
                  <span className="feature-value">12 مگاپیکسل</span>
                </li>
                <li>
                  <span className="text-muted">نسخه سیستم عامل: </span>
                  <span className="feature-value">ios 15</span>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-3 text-muted h4">
              <i className="bi bi-info-circle-fill text-muted"></i>
              <p>
                امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در
                صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های
                دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری،
                می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع
                کنید.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product-seller border">
              <div className="d-flex justify-content-between align-items-center">
                <h3>فروشنده</h3>
                <span className="text-primary">دو فروشنده دیگر</span>
              </div>
              <div>
                <div className="d-flex gap-4 mb-4">
                  <div className="product-seller__logo">
                    <img src="assets/logos/footerlogo2.png" alt="" />
                  </div>
                  <h2>دیجی کالا</h2>
                </div>
                <p className="text-lg-center text-muted h5">
                  <span className="text-success">100%</span>
                  <span>رضایت از کالا</span>
                  <span className="mx-2">|</span>
                  <span>عملکرد</span>
                  <span className="text-success">عالی</span>
                </p>
              </div>
              <div className="product__garuntee h4">
                <i className="bi bi-shield-check ms-3 text-muted"></i>
                <span>گارانتی 18 ماهه آنی نگر آرتین</span>
              </div>
              <div className="product__available position-relative py-4">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <i className="bi bi-clipboard2-check text-primary"></i>
                  <span className="flex-grow-1 d-block ms-auto me-3 ">
                    موجود در انبار دیجی کالا
                  </span>
                  <i className="bi bi-chevron-left text-muted"></i>
                </div>
                <ul className="pe-5">
                  <li>
                    <i className="bi bi-truck text-danger ms-3"></i>
                    <span className="text-muted h5">ارسال دیجی کالا</span>
                  </li>
                  <li>
                    <i className="bi bi-rocket-takeoff text-primary ms-3"></i>
                    <span className="text-muted h5">
                      ارسال قوری (شهر تهران)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="product__coin">
                <i className="bi bi-coin text-warning ms-4"></i>
                <span className="text-dark h5">150 امتیاز دیجی کلاب</span>
              </div>
              <div className="d-none d-lg-block">
                <p className="product__price text-left mt-4">
                  <span className="h3">41,000,000</span>
                  <span>تومان</span>
                </p>
                <button className="add-to-cart-btn">افزودن به سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
