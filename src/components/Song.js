import React from "react";

const Song = (props) => {
  return (
    <div className="song-container">
      <img src={props.image} alt="coverImage" />
      <h2>{props.name}</h2>
      <h3>{props.artist}</h3>
    </div>
  );
};

export default Song;
