import React from "react";

const LibrarySong = ({ eachSong, setCurrentSong, setIsPlaying, songs }) => {
  const changeSong = () => {
    setCurrentSong(eachSong);
    setIsPlaying(false);
    songs.forEach((element) => {
      if (element === eachSong) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  };
  return (
    <div
      className={`library-song ${eachSong.active ? "selected" : ""}`}
      onClick={changeSong}
    >
      <img src={eachSong.cover} alt={eachSong.name} />
      <div className="song-description">
        <h3>{eachSong.name}</h3>
        <h4>{eachSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
