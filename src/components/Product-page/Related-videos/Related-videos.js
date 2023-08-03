import "./Related-video.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import RelatedVideo from "./Related-video/Related-video";
import SectionTitle from "../Section-title/Section-title";

const RelatedVideos = () => {
  return (
    <div className="container-fluid">
      <section className="related-videos border p-4 rounded-4">
        <SectionTitle title={"ویدیوهای مرتبط"} />
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            360: { slidesPerView: 1.1 },
            450: { slidesPerView: 1.3 },
            570: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.1 },
            1100: { slidesPerView: 3.5 },
          }}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
          <SwiperSlide>
            <RelatedVideo />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default RelatedVideos;
