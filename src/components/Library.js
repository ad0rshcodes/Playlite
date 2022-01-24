import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, setIsPlaying, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((eachSong) => (
          <LibrarySong
            key={eachSong.id}
            eachSong={eachSong}
            setCurrentSong={setCurrentSong}
            setIsPlaying={setIsPlaying}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
