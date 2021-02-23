import React, {useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";

const VideoPlayer = ({defaultIsPlaying, src, link}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);
  const videoRef = useRef();

  useEffect(() => {

    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
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
