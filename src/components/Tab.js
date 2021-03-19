import React, {useState} from "react";
import PropTypes from "prop-types";
import TabOverview from "./TabOverview";
import TabDetails from "./TabDetails";
import TabReviews from "./TabReviews";

const tabs = [`Overview`, `Details`, `Reviews`];

const Tab = ({film = {}}) => {

  const [filmTab, setFilmTab] = useState(`Overview`);

  const getComponentByType = (tabFilm) => {
    switch (tabFilm) {
      case `Details`:
        return <TabDetails film={film} />;

      case `Reviews`:
        return <TabReviews />;
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

export default Tab;
