import SectionTitle from "../Section-title/Section-title";
import "./Buyed-with.css";
import Product from "../Product/Product";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const BuyedWith = () => {
  return (
    <div className="container-fluid">
      <section className="buyed-with border p-4 rounded-4">
        <SectionTitle title={"در کنارش خریداری شده"} />
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1.1 },
            360: { slidesPerView: 1.4 },
            400: { slidesPerView: 1.7 },
            480: { slidesPerView: 2.1 },
            550: { slidesPerView: 2.5 },
            650: { slidesPerView: 3.3 },
            850: { slidesPerView: 4.1 },
            1100: { slidesPerView: 5.5 },
          }}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default BuyedWith;
