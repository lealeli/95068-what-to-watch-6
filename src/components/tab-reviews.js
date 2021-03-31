import React, {memo} from "react";
import PropTypes from "prop-types";
import {splitReviewsCol} from "../utils/utils";
import Moment from "react-moment";


const TabReviews = ({comments = []}) => {
  if (comments.length === 0) {
    return <div>No reviews</div>;
  }
  const {first, second} = splitReviewsCol(comments);

  return <>
    <div className="movie-card__reviews movie-card__row">
      {first.length !== 0 &&
      <div className="movie-card__reviews-col">{first.map((c) =>
        <div key={`${c.user.id}-${c.id}`} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{c.comment}</p>

            <footer className="review__details">
              <cite className="review__author">{c.user.name}</cite>
              <Moment className="review__date" format="MMMM D, YYYY">{c.date}</Moment>
            </footer>
          </blockquote>

          <div className="review__rating">{c.rating}</div>
        </div>
      )}
      </div>}
      {second.length !== 0 &&
      <div className="movie-card__reviews-col">{second.map((c) =>
        <div key={`${c.user.id}-${c.id}`} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{c.comment}</p>

            <footer className="review__details">
              <cite className="review__author">{c.user.name}</cite>
              <Moment className="review__date" format="MMMM D, YYYY">{c.date}</Moment>
            </footer>
          </blockquote>

          <div className="review__rating">{c.rating}</div>
        </div>
      )}
      </div>}
    </div>
  </>;
};

TabReviews.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default memo(TabReviews);
