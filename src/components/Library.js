import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setIsPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((eachSong) => (
          <LibrarySong
            key={eachSong.id}
            eachSong={eachSong}
            setCurrentSong={setCurrentSong}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
