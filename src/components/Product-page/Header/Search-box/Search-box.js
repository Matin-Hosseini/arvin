import "./Search-box.css";

const SearchBox = () => {
  return (
    <div className="search-box d-flex flex-grow-1 ms-auto me-4">
      <i className="bi bi-search"></i>
      <input className="flex-grow-1" type="text" placeholder="جستجو..." />
    </div>
  );
};

export default SearchBox
