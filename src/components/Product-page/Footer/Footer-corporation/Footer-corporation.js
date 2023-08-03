import "./Footer-corporation.css"
const FooterCorporation = ({src}) => {
  return (
    <div className="corporation">
      <a href="#">
        <img src={src} alt="" />
      </a>
    </div>
  );
};

export default FooterCorporation