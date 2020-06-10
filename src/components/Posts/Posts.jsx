import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./style.sass";

function Posts(props) {
  const { postsArr } = props;

  return (
    <CSSTransition classNames="blob" in={true} appear={true} timeout={1000}>
      <ul className="posts">
        {postsArr.map(({ first_name, avatar }, index) => (
          <li key={index} className="posts__item">
            <Link to={`/blog/${index + 1}`} className="posts__link">
              <img src={avatar} className="posts__img" alt="" />
              <h6 className="posts__title">{first_name}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </CSSTransition>
  );
}

Posts.propTypes = {
  postsArr: PropTypes.array,
};

Posts.defaultProps = {
  postsArr: [],
};

export default Posts;
