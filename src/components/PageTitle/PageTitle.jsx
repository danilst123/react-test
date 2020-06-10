import React from "react";
import PropTypes from "prop-types";
import "./style.sass";

function PageTitle(props) {
  const { children } = props;
  return <h1 className="page-title">{children}</h1>;
}

PageTitle.propTypes = {
  children: PropTypes.string,
};

export default PageTitle;
