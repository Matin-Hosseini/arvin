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
      <Row className="align-items-center">
        <Col md={6}>
          <div className="d-flex align-items-center">
            <RxCross2
              className="text-danger curson-pointer"
              onClick={() => onRemove(id)}
            />
            <div className="d-flex align-items-center">
              <div className="product-item__img">
                <img src={`assets/images/products/${img}`} alt={name} />
              </div>
              <h2 className="ms-5 fs-3">{name}</h2>
            </div>
          </div>
        </Col>
        <Col md={2} className="text-left">
          <div className="">{(price * count).toLocaleString()}تومان</div>
        </Col>
        <Col md={2} className="text-left">
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
        <Col md={2} className="text-left">
          <div className="">{price.toLocaleString()}تومان</div>
        </Col>
      </Row>
    </>
  );
}
