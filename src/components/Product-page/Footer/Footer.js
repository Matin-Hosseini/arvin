import FooterCorporation from "./Footer-corporation/Footer-corporation";
import FooterFeature from "./Footer-feature/Footer-feature";
import FooterTrustImage from "./Footer-trust-image/Footer-trust-image";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <a href="#">
              <img src="assets/logos/digi.svg" alt="دیجیکالا" />
            </a>
          </div>
          <a href="#" className="to-top-btn py-3 px-3 ps-4 border rounded-4">
            <span className="ms-2">بازگشت به بالا</span>
            <i className="bi bi-chevron-up"></i>
          </a>
        </div>

        <p className="footer-contact-information">
          <span className="ms-4">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
          <span> | </span>
          <span className="d-lg-inline-block d-block me-0 me-lg-4">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </span>
        </p>

        <div className="footer__features row my-5 d-none d-lg-flex">
          <div className="col">
            <FooterFeature
              imgName={"express-delivery.svg"}
              title={"امکان تحویل اکسپرس"}
            />
          </div>
          <div className="col">
            <FooterFeature
              imgName={"cash-on-delivery.svg"}
              title={"امکان پرداخت در محل"}
            />
          </div>
          <div className="col">
            <FooterFeature
              imgName={"days-return.svg"}
              title={"7روز هفته، 24ساعته"}
            />
          </div>
          <div className="col">
            <FooterFeature
              imgName={"support.svg"}
              title={"هفت روز ضمانت بازگشت کالا"}
            />
          </div>
          <div className="col">
            <FooterFeature
              imgName={"original-products.svg"}
              title={"ضمانت اصل بودن کالا"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-3">
            <ul className="footer-menu">
              <p>با دیجی‌کالا</p>
              <li>
                <a href="#">اتاق خبر دیجی کالا</a>
              </li>
              <li>
                <a href="#">فروش در دیجی‌کالا</a>
              </li>
              <li>
                <a href="#">فرصت های شغلی</a>
              </li>
              <li>
                <a href="#">گرارش تخلف در دیجی‌کالا</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">تماس با دیجی‌کالا</a>
              </li>
              <li>
                <a href="#">درباره دیجی‌کالا</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <ul className="footer-menu">
              <p>خدمات مشتریان</p>
              <li>
                <a href="#">پاسخ به پرسش‌های متداول</a>
              </li>
              <li>
                <a href="#">رویه های بازگرداندن کالا</a>
              </li>
              <li>
                <a href="#">شرایط استفاده</a>
              </li>
              <li>
                <a href="#">حریم خصوصی</a>
              </li>
              <li>
                <a href="#">گزارش باگ</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <ul className="footer-menu">
              <p>راهنمای خرید از دیجی‌کالا</p>
              <li>
                <a href="#">نحوه ثبت سفارش</a>
              </li>
              <li>
                <a href="#">رویه ارسال سفارش</a>
              </li>
              <li>
                <a href="#">شیوه‌های پرداخت</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <div className="footer-newsletter">
              <div className="d-flex justify-content-between d-lg-block">
                <p>همراه ما باشید!</p>
                <div className="footer__socials">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-linkedin"></i>
                </div>
              </div>
              <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
              <form action="post" className="footer-newsletter__form d-flex">
                <input
                  type="email"
                  className="flex-grow-1 px-3 ms-2 rounded-3"
                  placeholder="ایمیل شما"
                />
                <button type="button" className="py-3 px-4 rounded-3">
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-application p-4 rounded-4 text-white d-flex flex-column flex-lg-row justify-content-between align-items-center my-5">
          <div className="d-flex align-items-center gap-3">
            <div className="footer-application__get-app-img">
              <a href="#">
                <img
                  src="assets/logos/footerlogo2.png"
                  alt="دریافت اپلیکیشن دیجی کالا"
                />
              </a>
            </div>
            <p className="m-0">دانلود اپلیکیشن دیجی‌کالا</p>
          </div>
          <div className="d-flex gap-3 footer-application__img-links flex-wrap justify-content-center ms-lg-4 me-lg-auto my-4 my-lg-0">
            <div>
              <a href="#">
                <img
                  src="assets/SVG/coffe-bazzar.svg"
                  alt="دریافت از کافه بازار"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/SVG/myket.svg" alt="دریافت از مایکت" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="assets/SVG/sib-app.svg" alt="دریافت از سیب" />
              </a>
            </div>
          </div>
          <div className="footer-application__more-information">
            <div className="bg-white footer-application__more-information-img d-none d-lg-block">
              <a href="#">
                <img src="assets/SVG/More.svg" alt="اطلاعات بیشتر" />
              </a>
            </div>
            <a href="#" className="d-lg-none text-white d-flex gap-2">
              <span>اطلاعات بیشتر</span>
              <i className="bi bi-chevron-up"></i>
            </a>
          </div>
        </div>

        <div className="row footer-description-container my-5">
          <div className="col-lg-9">
            <div className="footer-descriprion">
              <div>
                <h1>
                  فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین.
                </h1>
                <p>
                  یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند
                  کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی
                  کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته
                  باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی
                  آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته
                  باشد.
                </p>
                <h2>کدام محصولات در دیجی‌کالا قابل سفارش هستند؟</h2>
                <p>
                  تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان
                  خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی
                  روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت
                  انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود
                  را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب
                  منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های
                  پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به
                  معرفی آن‌ها می‌پردازیم.
                </p>
              </div>
              <span className="view-more-btn d-flex gap-2">
                <span>مشاهده بیشتر</span>
                <i className="bi bi-chevron-left m-0"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-trust-images d-flex gap-3 justify-content-center">
              <FooterTrustImage src={"assets/logos/rezi.png"} />
              <FooterTrustImage src={"assets/logos/kasbokar.png"} />
              <FooterTrustImage src={"assets/logos/kasbokar.png"} />
            </div>
          </div>
        </div>

        <p className="footer-caption">
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
          کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
          آنلاین دیجی‌کالا) است.
        </p>
      </div>
      <div className="corporations mt-5">
        <FooterCorporation src={"assets/SVG/corporation/digimag.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digipay.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digistyle.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digiplus.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digiclub.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/jet.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/magnet.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digiMehr.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/fidibo.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/diginext.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/pindo.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/komodaa.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digiexpress.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/ganjeh.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/digify.svg"} />
        <FooterCorporation src={"assets/SVG/corporation/smartech.svg"} />
        <FooterCorporation
          src={"assets/SVG/corporation/digikala-business.svg"}
        />
        <FooterCorporation
          src={"assets/SVG/corporation/digikala-service.svg"}
        />
      </div>
    </footer>
  );
};

export default Footer;
