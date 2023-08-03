import "./Banner.css";

const Banner = () => {
  return (
    <div className="container my-5">
      <picture>
        <source
          media="(min-width: 992px)"
          srcSet="assets/images/banner/banner-big.jpg"
        />
        <img
          src="assets/images/banner/banner-small.jpg"
          alt=""
          className="rounded-4"
        />
      </picture>
    </div>
  );
};

export default Banner;
