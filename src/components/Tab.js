import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import TabOverview from "./TabOverview";
import TabDetails from "./TabDetails";
import TabReviews from "./TabReviews";
import {useApi} from "../store/api-hook";

const tabs = [`Overview`, `Details`, `Reviews`];

const Tab = ({film = {}}) => {

  const [filmTab, setFilmTab] = useState(tabs[0]);
  const [comments, isCommentsLoading] = useApi(`/comments/${film.id}`);

  if (isCommentsLoading) {
    return <div>Loading film info</div>;
  }

  const getComponentByType = (tabFilm) => {
    switch (tabFilm) {
      case `Details`:
        return <TabDetails film={film} />;

      case `Reviews`:
        return <TabReviews comments={comments} />;
    }

    return <TabOverview film={film} />;
  };

  return <>
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            tabs.map((id) => (
              <li key={id} className={`movie-nav__item ${id === filmTab && `movie-nav__item--active`}`} onClick={()=> setFilmTab(id)}>
                <a className="movie-nav__link">{id}</a>
              </li>
            ))
          }
        </ul>
      </nav>

      {getComponentByType(filmTab)}

    </div>
  </>;
};

Tab.propTypes = {
  film: PropTypes.object.isRequired,
};

export default memo(Tab);
