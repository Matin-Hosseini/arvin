import "./Product-in-depth-details.css";
import SectionTitle from "../../Section-title/Section-title";

const ProductInDepthDetails = () => {
  return (
    <section>
      <SectionTitle title={"بررسی تخصصی"} />
      <div className="product-in-depth-details__content">
        <div className="row">
          <div className="col-lg-8">
            <p>
              گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی آیفون 13 پرو
              مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی معرفی شدند. بدون شک دو
              مدل پرو و پرو مکس به عنوان پرچمداران این شرکت از مشخصات فنی
              قدرتمند‌تری بهره برده‌اند. اما در این میان آیفون 13 به همراه مدل
              مینی با قیمتی مقرون‌به‌صرفه‌تر روانه بازار شده‌اند تا امکان خرید
              برای کاربران بیشتری امکان‌پذیر باشد. در این مقاله خواهیم دید که
              آیفون 13 به نسبت نسل قبلی چه مشخصاتی با خود به‌همراه داشته و در
              بخش‌های مختلف چه عملکردی را از خودش به‌نمایش می‌گذارد. شاید با
              توجه به مشخصات تقریبا مشابه آیفون 13 و آیفون 12، این سوال برای شما
              به وجود آید که چرا آیفون 13 می‌تواند عملکرد بهتری داشته باشد. پس
              با ما همراه باشید تا به دلایل عملکرد بهتر و قدرتمند‌تر آیفون 13 به
              نسبت آیفون 12 پی ببرید.
            </p>
          </div>
          <div className="col-lg-4">
           <img src="assets/images/products/iphone/details-1.jpg" alt="" />
          </div>
        </div>
      </div>
      <span className="text-primary h4 more-btn">
        <span>بیشتر</span>
        <i className="bi bi-chevron-left"></i>
      </span>
    </section>
  );
};

export default ProductInDepthDetails;
