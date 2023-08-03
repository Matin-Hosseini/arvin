import "./Comment-subject.css";
const CommentsSubjects = ({ subject, commentsAmount }) => {
  return (
    <div className="p-4 border rounded-4 mb-2">
      <div className="d-flex justify-content-between align-items-center mb-3 text-muted h5">
        <span>{subject}</span>
        <div>
          <span>{commentsAmount}</span>
          <span>دیدگاه</span>
        </div>
      </div>
      <div className="range">
        <span className="green"></span>
        <span className="red"></span>
      </div>
    </div>
  );
};
export default CommentsSubjects;
