import React from "react";
import "./Album.sass";

function Album(props) {
  const { url, title } = props.photo;

  return (
    <div className="album">
      <img src={url} alt={title} className="album__img" />
      <h2 className="album__title">{title}</h2>
    </div>
  );
}

export default Album;
