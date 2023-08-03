import React, { useEffect, useLayoutEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ProductItem from "./Product-item/Product-item";
import Loader from "../Loader/Loader";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import "./Shopping-cart.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PaymentModal from "./Payment-modal/Payment-modal";

const shoppingCartProducts = [
  {
    id: 489849,
    name: "محصول شماره 1",
    price: 248_000,
    count: 1,
    img: "image-product.png",
  },
  {
    id: 289747,
    name: "محصول شماره 2",
    price: 367_000,
    count: 1,
    img: "Product-Image.png",
  },
];

export default function ShoppingCart() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(shoppingCartProducts);
  const [postPrice, setPostPrice] = useState(0);
  const [shoppingCartPrice, setShoppingCartPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  //payment modal states
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    let sum = 0;
    let newPostPrice = 0;
    let totalPrice;

    products.forEach((product) => (sum += product.price * product.count));
    setShoppingCartPrice(sum);

    sum > 500_000 ? (newPostPrice = 20_000) : (newPostPrice = 0);
    totalPrice = sum + newPostPrice;
    totalPrice = totalPrice - (totalPrice * discountPercentage) / 100;

    setPostPrice(newPostPrice);
    setTotalPrice(totalPrice);
  }, [products]);

  const addCountHandler = (productId) => {
    const newProducts = [...products];
    const targetProduct = products.find((product) => product.id === productId);
    targetProduct.count = targetProduct.count + 1;

    setProducts(newProducts);
  };

  const minusCountHandler = (productId) => {
    const newProducts = [...products];
    const targetProduct = products.find((product) => product.id === productId);
    targetProduct.count = targetProduct.count - 1;

    setProducts(newProducts);
  };

  const removeHandler = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  const discountCodeHandler = async (e) => {
    e.preventDefault();
    let newTotalPrice;
    setLoading(true);
    const getAllCodes = await fetch(`http://localhost:8000/discountCodes`);
    const allCodes = await getAllCodes.json();
    const targetCode = allCodes.find((code) => code.code === discountCode);
    const discountPercent = targetCode.percentage;
    setDiscountPercentage(discountPercent);
    newTotalPrice = totalPrice - (totalPrice * discountPercent) / 100;
    setTotalPrice(newTotalPrice);
    setDiscountCode("");
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="secondary-font my-5">
        {loading && <Loader />}
        <Container className="px-5">
          {!products.length && (
            <div className="text-center my-5">
              <MdOutlineRemoveShoppingCart className="cart-cross-icon text-danger" />
              <p>سبد خرید شما خالی می باشد</p>
            </div>
          )}

          {products.length !== 0 && (
            <>
              <Row>
                <Col md={6}>محصول</Col>
                <Col md={2} className="text-left">
                  قیمت
                </Col>
                <Col md={2} className="text-left">
                  تعداد
                </Col>
                <Col md={2} className="text-left">
                  قیمت واحد
                </Col>
              </Row>

              <div className="products mb-5">
                {products.map((product) => (
                  <ProductItem
                    {...product}
                    key={product.id}
                    onAddCount={addCountHandler}
                    onMinusCount={minusCountHandler}
                    onRemove={removeHandler}
                  />
                ))}
              </div>
            </>
          )}

          <div className="d-flex justify-content-between align-items-start">
            <form
              action=""
              className="coupon-form"
              onSubmit={discountCodeHandler}>
              <input
                type="text"
                placeholder="کد تخفیف"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button>اعمال کد</button>
            </form>

            <div>
              <ul className="cart-calculations">
                <li className="d-flex justify-content-between align-items-center fs-4">
                  <span>مجموع سبد</span>
                  <span>{shoppingCartPrice.toLocaleString()} تومان</span>
                </li>
                <li className="d-flex justify-content-between align-items-center fs-4">
                  <span>هزینه پست</span>
                  <span>{postPrice.toLocaleString()} تومان</span>
                </li>
                <li className="d-flex justify-content-between align-items-center fs-4">
                  <span>تخفیف</span>
                  <span>{discountPercentage}%</span>
                </li>
                <li className="d-flex justify-content-between align-items-center fs-2 fw-bold">
                  <span className="">مجموع کل</span>
                  <span className="">{totalPrice.toLocaleString()} تومان</span>
                </li>
              </ul>
              <button
                className="check-out-btn"
                onClick={() => setShowPaymentModal(true)}>
                پرداخت
              </button>
            </div>
          </div>
        </Container>
      </div>

      <PaymentModal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        products={products}
        onFinish={() => setProducts([])}
      />
      <Footer />
    </>
  );
}
