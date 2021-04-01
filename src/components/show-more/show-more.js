import React from "react";
import PropTypes from "prop-types";

const ShowMore = ({length, count, onClick}) => {

  if (length < count) {
    return null;
  }
  return <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
  </div>;
};

ShowMore.propTypes = {
  length: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShowMore;
