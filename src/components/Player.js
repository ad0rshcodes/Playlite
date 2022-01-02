import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);
  const playBackward = () => {};
  const play = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const playForward = () => {};
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  const getTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time) - 60 * min;
    return `${min}:${("0" + sec).slice(-2)}`;
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play"
          icon={faPlay}
          size="2x"
          onClick={play}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={playForward}
        />
      </div>
      <audio
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
      ></audio>
    </div>
  );
};
export default Player;
