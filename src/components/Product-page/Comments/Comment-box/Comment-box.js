import "./Comment-box.css";
const CommentBox = () => {
  return (
    <div className="comment-box p-3 border rounded-3 d-lg-none">
      <h2>Iphone13</h2>
      <div>
        <i className="bi bi-hand-thumbs-up text-success"></i>
        <span className="text-success">پیشنهاد می کنم</span>
      </div>
      <p>
        گوشی فوق العاده عالی هستش البته که از اپل غیر از این هم نمیشه انتظار
        داشت در خریدش شک نکنید
      </p>
      <div className="desktop-single-comment__info">
        <span>10 تیر 1402</span>
        <span>کاربرد دیجی کالا</span>
      </div>
    </div>
  );
};

export default CommentBox;
