import React, {memo, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import LoadingScreen from "../components/LoadingScreen";
import NotFoundScreen from "./NotFoundScreen";
import {getActiveMove} from "../store/films/selector";
import {fetchFilm} from "../store/api-actions";
import {connect} from "react-redux";
import browserHistory from "../store/browser-history";

const Player = ({match, onLoadFilm, activeMove}) => {

  const filmId = Number(match.params.id);
  const filmLoader = activeMove[filmId];
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [percentPlayed, setPercentPlayed] = useState(0);

  useEffect(() => {
    if (!filmLoader) {
      onLoadFilm(filmId);
    }
  }, [filmLoader]);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

  }, [isPlaying, filmLoader]);

  const ticker = () => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      // video loaded
      setSecondsLeft(videoRef.current.duration - videoRef.current.currentTime);
      setPercentPlayed(videoRef.current.currentTime * 100 / videoRef.current.duration);
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      return () => {};
    }

    const tick = setInterval(ticker, 1000);
    return () => clearInterval(tick);
  }, [isPlaying]);


  if (!filmLoader || filmLoader.isFetching) {
    return <LoadingScreen />;
  }

  if (!filmLoader.film.id) {
    return <NotFoundScreen />;
  }

  const film = filmLoader.film;

  return <>
    <div className="player">
      <video src={film.video_link} className="player__video" poster={film.poster_image} ref={videoRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}></video>

      <button type="button" className="player__exit" onClick={() => browserHistory.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percentPlayed} max="100"></progress>
            <div className="player__toggler" style={{left: `${percentPlayed}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{new Date(secondsLeft * 1000).toISOString().substr(11, 8)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            }
          </button>

          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={() => videoRef.current.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  </>;
};

Player.propTypes = {
  match: PropTypes.object.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
  activeMove: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({activeMove: getActiveMove(state)});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilm: (id) => dispatch(fetchFilm(id)),
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Player));
