import "./Footer-feature.css"
const FooterFeature = ({imgName, title}) => {
  return (
    <div className="footer__feature">
      <div className="image">
        <a href="#">
          <img src={"assets/SVG/footer/features/" + imgName} alt="" />
        </a>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default FooterFeature
