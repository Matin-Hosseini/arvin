import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./Product-item/Product-item";

import "./Shopping-cart.css";

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
  const [products, setProducts] = useState(shoppingCartProducts);
  const [postPrice, setPostPrice] = useState(0);
  const [shoppingCartPrice, setShoppingCartPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   fetch(`http://localhost:8000/shoppingCartProducts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  useEffect(() => {
    let sum = 0;
    products.forEach((product) => (sum += product.price * product.count));
    setShoppingCartPrice(sum);
    if (sum > 500_000) {
      setPostPrice(20_000);
    }
    setTotalPrice(sum + postPrice);
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

  console.log("render");

  return (
    <div className="secondary-font">
      <Container className="px-5">
        <Row>
          <Col md={6}>محصول</Col>
          <Col md={2} className="text-center">
            قیمت
          </Col>
          <Col md={2} className="text-center">
            تعداد
          </Col>
          <Col md={2} className="text-center">
            قیمت واحد
          </Col>
        </Row>

        <div className="products mb-5">
          {products.length > 0 &&
            products.map((product) => (
              <ProductItem
                {...product}
                key={product.id}
                onAddCount={addCountHandler}
                onMinusCount={minusCountHandler}
                onRemove={removeHandler}
              />
            ))}
        </div>

        <div className="d-flex justify-content-between align-items-start">
          <form action="" className="coupon-form">
            <input type="text" placeholder="کد تخفیف" />
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
                <span>0</span>
              </li>
              <li className="d-flex justify-content-between align-items-center fs-2 fw-bold">
                <span className="">مجموع کل</span>
                <span className="">{totalPrice.toLocaleString()} تومان</span>
              </li>
            </ul>
            <button className="check-out-btn">پرداخت</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
