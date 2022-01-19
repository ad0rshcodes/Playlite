import React from "react";

const LibrarySong = ({ eachSong, setCurrentSong, setIsPlaying }) => {
  const changeSong = () => {
    setCurrentSong(eachSong);
    setIsPlaying(false);
  };

  return (
    <div className="library-song" onClick={changeSong}>
      <img src={eachSong.cover} alt={eachSong.name} />
      <div className="song-description">
        <h3>{eachSong.name}</h3>
        <h4>{eachSong.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
