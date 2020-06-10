import React from "react";
import "./AlbumList.sass";
import Album from "../Album/Album";
import PropTypes from "prop-types";

AlbumsList.propTypes = {
  albums: PropTypes.array,
};

function AlbumsList(props) {
  const { albums } = props;

  return (
    <ul className="albums">
      {albums.map((album) => (
        <li key={album.id} className="albums__item">
          <Album photo={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumsList;
