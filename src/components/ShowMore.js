import React from "react";
import PropTypes from "prop-types";
import {incLoadFilms} from "../store/actions";
import {connect} from "react-redux";

const ShowMore = ({length, count, incCount}) => {

  if (length >= count) {
    return <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => incCount(8)}>Show more</button>
    </div>;
  }
  return <></>;
};

ShowMore.propTypes = {
  length: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  incCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({count}) => ({count});

const mapDispatchToProps = (dispatch) => ({
  incCount: (count) => dispatch(incLoadFilms(count))
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
