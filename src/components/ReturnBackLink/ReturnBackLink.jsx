import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";

import SVG from "./icon.svg";

const Icon = ({ name, color, size }) => (
  <svg className="returnBackLunk__svg" fill={color} width={size} height={size}>
    <use xlinkHref={`${SVG}#${name}`} />
  </svg>
);

function ReturnBackLink(props) {
  const { children = "Back", to = "/" } = props;

  return (
    <Link className="returnBackLink" to={to}>
      <Icon name="back" color="currentColor" size="40px" />
      {children}
    </Link>
  );
}

export default ReturnBackLink;
