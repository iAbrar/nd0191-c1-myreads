import React from "react";
import PropTypes from "prop-types";

const SelectShelf = ({ book, shelf, onUpdateShelf, list }) => {
  const options = list;

  return (
    <select
      value={shelf ? shelf : ""}
      onChange={(e) => onUpdateShelf(book, e.target.value)}
    >
      {options.map((option, index) => {
        if (index === 0) {
          return (
            <option key={index} value={option.value} disabled>
              {option.label}
            </option>
          );
        } else {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        }
      })}
    </select>
  );
};
SelectShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
};

export default SelectShelf;
