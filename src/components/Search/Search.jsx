import React from "react";
import PropTypes from "prop-types";
import "./style.sass";
import Input from "../Input/Input";

function Search(props) {
  const {
    keywords,
    palceholder,
    handleChange,
    handleSubmit,
    handleClear,
  } = props;

  return (
    <form className="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={palceholder}
        onChange={handleChange}
        value={keywords}
        className="search__input"
      />
      <div className="search__clear" onClick={handleClear}>
        X
      </div>
      <button className="search__btn">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
          />
        </svg>
      </button>
    </form>
  );
}

Search.propTypes = {
  keywords: PropTypes.string,
  palceholder: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

Search.defaultProps = {
  keywords: "",
  palceholder: "Введите ключевые слова...",
  handleChange: () => console.log("change"),
  handleSubmit: (e) => {
    e.preventDefault();
    console.log("submit");
  },
  handleClear: (e) => {
    e.preventDefault();
    console.log("clear");
  },
};

export default Search;
