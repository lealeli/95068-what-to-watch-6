import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";

const VideoPlayer = ({isPlaying, isMuted = false, src, poster}) => {
  const videoRef = useRef(null);
  const video = videoRef.current;
  let timeoutId;

  useEffect(() => {
    if (isPlaying) {
      timeoutId = setTimeout(() => video.play(), 1000);
      isMuted = true;
      return;
    } else {
      if (video !== null) {
        video.load();
        isMuted = false;
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isPlaying]);

  console.log(isMuted);
  return <video className="small-movie-card__image" controls={isMuted} poster={poster} src={src} ref={videoRef} width="100%" height="100%"></video>;
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isStart: PropTypes.bool.isRequired,
};

export default VideoPlayer;
