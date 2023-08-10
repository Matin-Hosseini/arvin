import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Product-item.css";

import { RxCross2 } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function ProductItem({
  name,
  count,
  img,
  price,
  id,
  onAddCount,
  onMinusCount,
  onRemove,
}) {
  return (
    <>
      <Row className="align-items-center single-product">
        <Col xs={12} md={6} className="d-flex align-items-center">
            <RxCross2
              className="text-danger curson-pointer"
              onClick={() => onRemove(id)}
            />
          
            <div className="d-flex flex-column flex-md-row align-items-center  flex-grow-1 flex-md-grow-0">
              <div className="product-item__img">
                <img src={`assets/images/products/${img}`} alt={name} />
              </div>
              <h2 className="single-product__title me-md-3">{name}</h2>
            </div>
          
        </Col>
        <Col xs={4} md={2} className="text-center">
          <span>قیمت:</span>
          <div className="">{(price * count).toLocaleString()}تومان</div>
        </Col>
        <Col  xs={4} md={2} className="text-center">
          <span>تعداد:</span>
          <div>
            <button>
              <AiOutlinePlus
                className="text-primary fs-4 curson-pointer"
                onClick={() => onAddCount(id)}
              />
            </button>
            <span className="mx-4 fs-3 user-select-none">{count}</span>
            <button
              disabled={count === 1 ? true : false}
              onClick={() => onMinusCount(id)}>
              <AiOutlineMinus className="text-primary fs-4 curson-pointer" />
            </button>
          </div>
        </Col>
        <Col xs={4} md={2} className="text-center">
          <span>قمیت واحد:</span>
          <div className="">{price.toLocaleString()}تومان</div>
        </Col>
      </Row>
    </>
  );
}
