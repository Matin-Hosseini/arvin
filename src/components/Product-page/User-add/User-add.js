import "./User-add.css";

const UserAdd = ({ title, btnValue, info }) => {
  return (
    <div className="user-add">
      <p className="text-muted h5">{title}</p>
      <button className="text-danger border border-danger bg-white w-100 py-3 rounded-4">
        {btnValue}
      </button>
      {info && (
        <div className="d-flex gap-2">
          <i className="bi bi-info-circle-fill text-muted"></i>

          <p className="text-muted">
            <span className="d-block">۵ امتیاز دیجی‌کلاب</span>
            <span>
              پس از تایید شدن دیدگاه، با رفتن به صفحه ماموریت‌های دیجی‌کلاب
              امتیازتان را دریافت کنید.
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserAdd;
