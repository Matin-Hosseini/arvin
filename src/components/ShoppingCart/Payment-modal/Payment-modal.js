import React, { useState } from "react";

import { Row, Col, Container, Modal, Button } from "react-bootstrap";

import { FiArrowLeft } from "react-icons/fi";
import { ImCross } from "react-icons/im";

import "./Payment-modal.css";
import Loader from "../../Loader/Loader";

//mui
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function PaymentModal(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  //stepper
  const [activeStep, setActiveStep] = useState(currentStep - 1);
  const steps = ["", "", ""];

  //information form states (first form)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //credit card states
  const [saveCard, setSaveCard] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv2, setCvv2] = useState("");

  const nextStepHandler = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 1) {
        submitInfo();
      }
      if (prevStep === 2 && saveCard) {
        saveCardInfo();
      }

      if (prevStep === 3) {
        props.onFinish();
        props.onHide();
      }

      if (prevStep < 3) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        return prevStep + 1;
      }
      return prevStep;
    });
  };

  const prevStepHandler = () => {
    setCurrentStep((prevStep) => {
      if (prevStep > 1) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  const submitInfo = async () => {
    const productIDs = props.products.map((product) => product.id);
    let userInfo = {
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      productIDs,
    };

    setLoading(true);
    await fetch(`http://localhost:8000/deliveries`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userInfo),
    });
    setLoading(false);
  };

  const saveCardInfo = async () => {
    setLoading(true);
    const getAllDelliveries = await fetch(`http://localhost:8000/deliveries`);
    const allDeliveries = await getAllDelliveries.json();

    const targetDelivery = allDeliveries.find(
      (delivery) =>
        delivery.email === email && delivery.phoneNumber === phoneNumber
    );

    const cardInfo = {
      ...targetDelivery,
      cardInfo: { cardNumber, cvv2, expDate },
    };
    if (targetDelivery) {
      await fetch(`http://localhost:8000/deliveries/${targetDelivery.id}`, {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(cardInfo),
        method: "PUT",
      });
    }
    setLoading(false);
  };

  //stepper methods

  return (
    <>
      {loading && <Loader />}
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
          className="text-center fs-2 fw-bold">
          مرحله پرداخت
        </Modal.Title>
        <Modal.Body className="">
          <Box sx={{ width: "100%" }} className="payment-stepper my-3">
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                const stepProps = {};
                const labelProps = {};

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          {currentStep === 1 ? (
            <>
              <form action="" className="payment-mdoal-form">
                <Row>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="نام"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="نام خانوادگی"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="ایمیل"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="align-items-center">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="2"
                      placeholder="آدرس ارسال"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}></textarea>
                  </Col>
                  <Col sm={6}>
                    <span className="fw-bold">
                      نحوه پرداخت خود را انتخاب کنید
                    </span>
                    <div className="payment-methods">
                      <ul>
                        <li className="d-flex justify-content-between algin-items-center payment-method active">
                          <span>کارت بانکی</span>
                          <input type="checkbox" name="" id="" checked />
                        </li>
                        <li className="d-flex justify-content-between algin-items-center payment-method">
                          <span>پرداخت زرین پال</span>
                          <input type="checkbox" name="" id="" />
                        </li>
                        <li className="d-flex justify-content-between algin-items-center payment-method">
                          <span>پرداخت درون برنامه ای</span>
                          <input type="checkbox" name="" id="" />
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="شماره موبایل"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                </Row>
              </form>
            </>
          ) : currentStep === 2 ? (
            <>
              <Row className="mb-5">
                <Col xs={6}>
                  <div className="credit-card-ui p-5 pt-0">
                    <img src="assets/images/CreditCard.png" alt="" />
                  </div>
                </Col>
                <Col xs={6}>
                  <form action="" className="payment-mdoal-form">
                    <input
                      type="tel"
                      placeholder="شماره کارت"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />

                    <Row className="p-0">
                      <Col xs={6} className="p-0">
                        <input
                          type="text"
                          placeholder="تاریخ انقضا"
                          value={expDate}
                          onChange={(e) => setExpDate(e.target.value)}
                        />
                      </Col>
                      <Col xs={6} className="p-0">
                        <input
                          type="text"
                          placeholder="cvv2"
                          value={cvv2}
                          onChange={(e) => setCvv2(e.target.value)}
                        />
                      </Col>
                    </Row>
                    <input type="text" placeholder="رمز دوم" />
                    <div className="text-secondary fs-4 d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={saveCard}
                        onChange={() => setSaveCard((prevState) => !prevState)}
                      />
                      <span>شماره کارت ذخیره شود</span>
                    </div>
                  </form>
                </Col>
              </Row>
            </>
          ) : currentStep === 3 ? (
            <>
              <div className="text-center">
                <div className="success-icon mx-auto">
                  <img src="assets/images/Success-Icon.png" alt="" />
                </div>
                <span className="text-dark fw-bold fs-3 mb-5 d-block">
                  پرداخت شما با موفقیت انجام شد
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <button className="blue-btn" onClick={nextStepHandler}>
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
    </>
  );
}
