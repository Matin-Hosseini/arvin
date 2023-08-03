import "./Question-box.css";
const QuestionBox = () => {
  return (
    <div className="question-box px-4 pt-3 d-flex border rounded-4 ">
      <i className="bi bi-question-circle h2 text-primary ms-3"></i>
      <p className="flex-grow-1">از کجا میشه فهمید ریپک نمیفرستن؟</p>
    </div>
  );
};
export default QuestionBox;
