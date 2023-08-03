import SectionTitle from "../Section-title/Section-title";
import ProductSeller from "./Product-seller/Product-seller";
import "./Product-sellers.css";

const ProductSellers = () => {
  return (
    <div className="container-fluid">
      <section className="product-sellers container-fluid p-4">
        <SectionTitle title={"فروشندگان این محصول"} />
        <ProductSeller />
        <ProductSeller />
        <ProductSeller />
        <ProductSeller />
      </section>
    </div>
  );
};

export default ProductSellers;
