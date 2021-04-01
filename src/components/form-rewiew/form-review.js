import React, {useState, useEffect, useCallback, memo} from 'react';
import PropTypes from "prop-types";
import {sendComment} from "../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import {getAddReview} from "../../store/film/selector";

const FormReview = ({id}) => {
  const dispatch = useDispatch();

  const addReview = useSelector(getAddReview);

  const [reviewForm, setReviewForm] = useState({
    rating: `8`,
    reviewText: ``
  });

  const [isDisabledForm, setIsDisabledForm] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendComment(id, reviewForm.reviewText, reviewForm.rating));
  };

  const handleFieldChange = useCallback((evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [name]: value});
  }, [reviewForm.rating, reviewForm.reviewText]);

  useEffect(() => {
    setIsDisabledForm(addReview.isReviewPosting);
  }, [addReview]);

  return (
    <>
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmit} >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" onChange={handleFieldChange} name="rating" value="1" disabled={isDisabledForm} checked={reviewForm.rating === `1`}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" onChange={handleFieldChange} name="rating" value="2" disabled={isDisabledForm} checked={reviewForm.rating === `2`}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" onChange={handleFieldChange} name="rating" value="3" disabled={isDisabledForm} checked={reviewForm.rating === `3`}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" onChange={handleFieldChange} name="rating" value="4" disabled={isDisabledForm} checked={reviewForm.rating === `4`}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" onChange={handleFieldChange} name="rating" value="5" disabled={isDisabledForm} checked={reviewForm.rating === `5`}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-6" type="radio" onChange={handleFieldChange} name="rating" value="6" disabled={isDisabledForm} checked={reviewForm.rating === `6`}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-7" type="radio" onChange={handleFieldChange} name="rating" value="7" disabled={isDisabledForm} checked={reviewForm.rating === `7`}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-8" type="radio" onChange={handleFieldChange} name="rating" value="8" disabled={isDisabledForm} checked={reviewForm.rating === `8`}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-9" type="radio" onChange={handleFieldChange} name="rating" value="9" disabled={isDisabledForm} checked={reviewForm.rating === `9`}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-10" type="radio" onChange={handleFieldChange} name="rating" value="10" disabled={isDisabledForm} checked={reviewForm.rating === `10`}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" onChange={handleFieldChange} name="reviewText" id="review-text" minLength="50" maxLength="500"
              placeholder="Review text" disabled={isDisabledForm}/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isDisabledForm}>Post</button>
            </div>

          </div>

          {addReview.error && <div>{addReview.error}</div>}
        </form>
      </div>
    </>);
};

FormReview.propTypes = {
  id: PropTypes.number.isRequired,
};

export default memo(FormReview);
