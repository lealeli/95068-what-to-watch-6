import React, {memo} from "react";
import PropTypes from "prop-types";
import {splitReviewsCol} from "../utils/utils";
import TabReviewsCol from "./tab-reviews-col";

const TabReviews = ({comments = []}) => {
  if (comments.length === 0) {
    return <div>No reviews</div>;
  }
  const {first, second} = splitReviewsCol(comments);

  return <>
    <div className="movie-card__reviews movie-card__row">
      <TabReviewsCol comments={first}/>
      <TabReviewsCol comments={second}/>
    </div>
  </>;
};

TabReviews.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default memo(TabReviews);
