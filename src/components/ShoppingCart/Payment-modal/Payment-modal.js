import React, { useState } from "react";

import { Row, Col, Container, Modal, Button } from "react-bootstrap";

import { FiArrowLeft } from "react-icons/fi";
import { ImCross } from "react-icons/im";

import "./Payment-modal.css";

export default function PaymentModal(props) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStepHandler = () => {
    setCurrentStep((prevStep) => {
      if (prevStep < 3) {
        return prevStep + 1;
      }
      return prevStep;
    });
  };

  const prevStepHandler = () => {
    setCurrentStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="secondary-font shopping-cart__payment-modal">
      <Modal.Header className="d-flex fs-1 text-primary border-0">
        <button>
          <ImCross
            onClick={props.onHide}
            className="fs-2 fw-bold text-primary"
          />
        </button>
        <button onClick={prevStepHandler}>
          <FiArrowLeft className="fs-1 text-primary" />
        </button>
      </Modal.Header>
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="text-center mb-5 fs-2 fw-bold">
        مرحله پرداخت
      </Modal.Title>
      <Modal.Body className="">
        {currentStep === 1 ? (
          <form action="" className="payment-mdoal-form">
            <Row>
              <Col sm={6}>
                <input type="text" placeholder="نام" />
              </Col>
              <Col sm={6}>
                <input type="text" placeholder="نام خانوادگی" />
              </Col>
              <Col sm={6}>
                <input type="text" placeholder="ایمیل" />
              </Col>
              <Col sm={6} className="align-items-center">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="آدرس ارسال"></textarea>
              </Col>
              <Col sm={6}>
                <span className="fw-bold">نحوه پرداخت خود را انتخاب کنید</span>
                <div className="payment-method">
                  <ul>
                    <li>کارت بانکی</li>
                    <li>پرداخت زرین پال</li>
                    <li>پرداخت</li>
                  </ul>
                </div>
              </Col>
              <Col sm={6}>
                <input type="text" placeholder="شماره موبایل" />
              </Col>
            </Row>
          </form>
        ) : currentStep === 2 ? (
          <Row className="mb-5">
            <Col xs={6}>
              <div className="credit-card-ui p-5 pt-0">
                <img src="assets/images/CreditCard.png" alt="" />
              </div>
            </Col>
            <Col xs={6}>
              <form action="" className="payment-mdoal-form">
                <input type="tel" placeholder="شماره کارت" />

                <Row className="p-0">
                  <Col xs={6} className="p-0">
                    <input type="text" placeholder="تاریخ انقضا" />
                  </Col>
                  <Col xs={6} className="p-0">
                    <input type="text" placeholder="cvv2" />
                  </Col>
                </Row>
                <input type="text" placeholder="رمز دوم" />
                <div className="text-secondary fs-4 d-flex align-items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <span>شماره کارت ذخیره شود</span>
                </div>
              </form>
            </Col>
          </Row>
        ) : currentStep === 3 ? (
          <div className="text-center">
            <div className="success-icon mx-auto">
              <img src="assets/images/Success-Icon.png" alt="" />
            </div>
            <span className="text-dark fw-bold fs-3 mb-5 d-block">
              پرداخت شما با موفقیت انجام شد
            </span>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
      <Modal.Footer className="justify-content-center border-0">
        <button className="blue-btn fs-1" onClick={nextStepHandler}>
          {currentStep === 1
            ? "مرحله بعدی"
            : currentStep === 2
            ? "پرداخت"
            : currentStep === 3
            ? "تکمیل"
            : ""}
        </button>
      </Modal.Footer>
    </Modal>
  );
}
