import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({isPlaying = true, isMuted = true, src, poster}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let timeoutId;

    if (isPlaying) {
      timeoutId = setTimeout(() => {
        video.play();
      }, 1000);

    } else {
      clearTimeout(timeoutId);
      video.load();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying]);

  return <video
    className="small-movie-card__image"
    muted={isMuted}
    poster={poster}
    ref={videoRef}
    width="100%"
    height="100%"
  >
    <source
      src={src}
      type="video/mp4"
    />
  </video>;
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
