import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";

const VideoPlayer = ({defaultIsPlaying, src, link}) => {
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  return <>
    <video className="small-movie-card__image" src={src} ref={videoRef} link={link}></video>
  </>;
};

VideoPlayer.propTypes = {
  defaultIsPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default VideoPlayer;
