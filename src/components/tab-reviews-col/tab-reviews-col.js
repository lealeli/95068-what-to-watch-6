import React, {memo} from "react";
import PropTypes from "prop-types";
import {format, parseISO} from "date-fns";

const TabReviewsCol = ({comments = []}) => {
  if (comments.length === 0) {
    return null;
  }

  return <div className="movie-card__reviews-col">{comments.map((c) =>
    <div key={c.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{c.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{c.user.name}</cite>
          <time className="review__date" dateTime={format(parseISO(c.date), `yyyy-mm-dd`)}>{format(parseISO(c.date), `MMMM d, yyy`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{c.rating}</div>
    </div>
  )}
  </div>;
};

TabReviewsCol.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default memo(TabReviewsCol);
