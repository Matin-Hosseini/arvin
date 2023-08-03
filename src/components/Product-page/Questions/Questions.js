import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SectionTitle from "../Section-title/Section-title";
import UserAdd from "../User-add/User-add";
import "./Questions.css";
import SingleQuestion from "./Single-question/Single-question";
import QuestionBox from "./Question-box/Questino-box";
const Questions = () => {
  return (
    <div className="container-fluid">
      <section className="questions">
        <SectionTitle title={"پرسش و پاسخ"} />
        <div className="row d-lg-flex d-none">
          <div className="col-lg-3">
            <UserAdd
              info={false}
              btnValue={"ثبت پرسش"}
              title={"شما هم درباره این کالا پرسش ثبت کنید"}
            />
          </div>
          <div className="col-lg-9">
            <div className="d-flex gap-4 align-items-center text-muted h4">
              <i className="bi bi-sort-down"></i>
              <span className="text-danger">جدیدترین</span>
              <span>دیدگاه خریداران</span>
              <span>مفیدترین</span>
            </div>
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
          </div>
        </div>

        <div className="d-lg-none">
          <Swiper
            spaceBetween={10}
            slidesPerView={3.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <QuestionBox />
            </SwiperSlide>
            <SwiperSlide>
              <QuestionBox />
            </SwiperSlide>
            <SwiperSlide>
              <QuestionBox />
            </SwiperSlide>
            <SwiperSlide>
              <QuestionBox />
            </SwiperSlide>
            <SwiperSlide>
              <QuestionBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
export default Questions;
