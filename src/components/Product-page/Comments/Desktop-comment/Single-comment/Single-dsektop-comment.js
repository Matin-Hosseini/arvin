import "./Single-desktop-comment.css";
const SingleDesktopComment = () => {
  return (
    <div className="single-desktop-comment">
      <div className="d-flex gap-3 align-items-baseline">
        <span className="score text-white bg-success rounded-2 h6 py-1 px-2">
          5,0
        </span>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center flex-grow-1 mb-5">
            <span className=" h3 fw-bold">Iphone13</span>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
          <div className="desktop-single-comment__info">
            <span>10 تیر 1402</span>
            <span>کاربرد دیجی کالا</span>
          </div>
          <div className="single-desktop-comment__caption">
            <i className="bi bi-hand-thumbs-up text-success"></i>
            <span className="text-success">پیشنهاد می کنم</span>
            <p className="mt-3">
              گوشی فوق العاده عالی هستش البته که از اپل غیر از این هم نمیشه
              انتظار داشت در خریدش شک نکنید
            </p>
          </div>
          <div className="text-muted h4 d-flex gap-4 p-4">
            <span>
              <i className="bi bi-shop"></i>
              <span>دیجی کالا</span>
            </span>
            <span>
              <span className="color"></span>
              <span>صورتی</span>
            </span>
          </div>
          <div className="comment-rating">
            <div className="d-flex justify-content-end gap-5">
                <span>آیا این دیدگاه مفید بود؟</span>
                <div>
                    <i className="bi bi-hand-thumbs-up ms-4"></i>
                    <i className="bi bi-hand-thumbs-down"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleDesktopComment;
