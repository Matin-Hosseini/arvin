import MoreBtn from "../../More-btn/More-btn";
import SectionTitle from "../../Section-title/Section-title";
import "./Product-features.css";

const ProductFeatures = () => {
  return (
    <section className="product-features">
      <SectionTitle title={"مشخصات"} />
      <div className="product-features__content">
        <div className="row">
          <div className="col-lg-4">
            <span>مشخصات</span>
          </div>
          <div className="col-lg-8">
            <ul>
              <li className="feature-menu">
                <h4>ابعاد</h4>
                <p>۱۴۶.۷x۷۱.۵x۷.۶۵</p>
              </li>
              <li className="feature-menu">
                <h4>وزن</h4>
                <p>۱۷۴ گرم</p>
              </li>
              <li className="feature-menu">
                <h4>فناوری صفحه‌نمایش</h4>
                <p>Super Retina XDR OLED</p>
              </li>
              <li className="feature-menu">
                <h4>بازه‌ی اندازه صفحه نمایش</h4>
                <p>سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)</p>
              </li>
            </ul>
          </div>
          <MoreBtn />
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
