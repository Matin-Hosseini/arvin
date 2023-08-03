import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import SectionTitle from "../Section-title/Section-title";
import UserAdd from "../User-add/User-add";
import CommentBox from "./Comment-box/Comment-box";
import "./Comments.css";
import DesktopComment from "./Desktop-comment/Desktop-comment";
const Comments = () => {
  return (
    <div className="container-fluid">
      <section className="comments border p-4 rounded-4">
        <SectionTitle title={"امتیاز و دیدگاه کاریران"} />
        <DesktopComment />

        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide>
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide>
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide>
            <CommentBox />
          </SwiperSlide>
          <SwiperSlide>
            <CommentBox />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};
export default Comments;
