import React, {memo, useEffect, useRef, useState} from "react";
import LoadingScreen from "../../loading-screen/loading-screen";
import NotFoundScreen from "../not-found/not-found";
import {getActiveMove} from "../../../store/film/selector";
import {fetchFilm} from "../../../store/api-actions";
import {useDispatch, useSelector} from "react-redux";
import browserHistory from "../../../store/browser-history";
import {useParams} from "react-router-dom";

const Player = () => {
  const dispatch = useDispatch();
  const matchParams = useParams();

  const activeMove = useSelector(getActiveMove);

  const filmId = Number(matchParams.id);
  const filmLoader = activeMove[filmId];
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [percentPlayed, setPercentPlayed] = useState(0);

  useEffect(() => {
    if (!filmLoader) {
      dispatch(fetchFilm(filmId));
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

  const onTick = () => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      // video loaded
      setSecondsLeft(videoRef.current.duration - videoRef.current.currentTime);
      setPercentPlayed(videoRef.current.currentTime * 100 / videoRef.current.duration);
    }
  };

  useEffect(() => {
    if (!isPlaying) {
      return null;
    }

    const tick = setInterval(onTick, 1000);
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
      <video src={film.video_link} className="player__video" poster={film.poster_image} ref={videoRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}/>

      <button type="button" className="player__exit" onClick={() => browserHistory.goBack()}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percentPlayed} max="100"/>
            <div className="player__toggler" style={{left: `${percentPlayed}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{new Date(secondsLeft * 1000).toISOString().substr(11, 8)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"/>
                </svg>
                <span>Pause</span>
              </>
              :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </>
            }
          </button>

          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={() => videoRef.current.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  </>;
};

export default memo(Player);
