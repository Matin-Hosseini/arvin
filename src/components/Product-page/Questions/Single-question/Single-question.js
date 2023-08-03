import "./Single-question.css";
const SingleQuestion = () => {
  return (
    <div className="d-flex align-items-baseline gap-4 single-question">
      <i className="bi bi-question-circle h2 text-primary"></i>
      <div className="flex-grow-1">
        <p className="question-caption">میشه تخفیف صورتیش تا آخر هفته بمونه؟</p>
        <span className="text-primary h5">
            <span>ثبت پاسخ</span>
            <i className="bi bi-chevron-left me-4 h5"></i>
        </span>
      </div>
    </div>
  );
};

export default SingleQuestion;
