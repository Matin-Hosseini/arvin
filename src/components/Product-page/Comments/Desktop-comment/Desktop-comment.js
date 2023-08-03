import UserAdd from "../../User-add/User-add";
import CommentsSubjects from "../Comments-subjects/Comments-subjects";
import EmptyStarIcon from "../Empty-star-icon/Empty-star-icon";
import StarIcon from "../Star-icon/Star-icon";
import "./Desktop-comment.css";
import SingleDesktopComment from "./Single-comment/Single-dsektop-comment";
const DesktopComment = () => {
  return (
    <div className="desktop-comment d-none d-lg-block">
      <div className="row">
        <div className="col-3">
          <p>
            <span className="h3">4.4</span>
            <span className="text-muted h5">از 5</span>
          </p>
          <div className="d-flex align-items-center my-5">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <EmptyStarIcon />
            <div className="text-muted h5 m-0 me-3">
              <span>از مجمع</span>
              <span>1,594</span>
              <span>امتیاز</span>
            </div>
          </div>
            <p className="h3 mb-3">موضوع دیدگاه ها </p>
            <CommentsSubjects subject={"قیمت و ارزش خرید"} commentsAmount={"594"}/>
            <CommentsSubjects subject={"کیفیت و کارایی"} commentsAmount={"200"}/>
            <CommentsSubjects subject={"شباهت یا مغیرت"} commentsAmount={"517"}/>
            <CommentsSubjects subject={"گارانتی"} commentsAmount={"52"}/>
            <CommentsSubjects subject={"باعاد یا سایز"} commentsAmount={""}/>
          <UserAdd
            title={"شما هم درباره این کالا دیدگاه ثبت کنید"}
            btnValue={"ثبت دیدگاه"}
            info={true}
          />
        </div>
        <div className="col-9">
            <div className="d-flex gap-4 align-items-center text-muted h4">
                <i className="bi bi-sort-down"></i>
                <span className="text-danger">جدیدترین</span>
                <span>دیدگاه خریداران</span>
                <span>مفیدترین</span>
            </div>
            <SingleDesktopComment/>
            <SingleDesktopComment/>
            <SingleDesktopComment/>
            <SingleDesktopComment/>
            <SingleDesktopComment/>
            <SingleDesktopComment/>
        </div>
      </div>
    </div>
  );
};
export default DesktopComment;
