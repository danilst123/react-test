import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import ReturnBackLink from "../ReturnBackLink/ReturnBackLink";

class Post extends Component {
  state = {
    data: null,
  };

  fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTimeout(() => {
      this.setState({ data: data.data });
    }, 300);
  };

  componentDidMount() {
    const { url, match } = this.props;
    const { id } = match.params;

    this.fetchData(`${url}/${id}`);
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <ReturnBackLink to="/blog">blog</ReturnBackLink>
        {data ? (
          <CSSTransition
            classNames="blob"
            in={true}
            appear={true}
            timeout={1000}
          >
            <div>
              <img src={data.avatar} alt="" />
              <h1>{`${data.first_name} ${data.last_name}`}</h1>
              <a href={`mailt:${data.email}`}>{data.email}</a>
            </div>
          </CSSTransition>
        ) : (
          <h1>"loading"</h1>
        )}
      </>
    );
  }
}

export default Post;
