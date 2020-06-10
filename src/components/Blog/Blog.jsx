import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import "./style.sass";

import Search from "../Search/Search";
import Posts from "../Posts/Posts";

import ReturnBackLink from "../ReturnBackLink/ReturnBackLink";

function Blog(props) {
  const {
    blog,
    handleSearchSubmit,
    handleSearchChange,
    handleSearchClear,
    searchData,
  } = props;
  const { users } = blog;

  return (
    <>
      <ReturnBackLink>Menu</ReturnBackLink>
      <PageTitle>Blog</PageTitle>
      <Search
        keywords={searchData.keywords}
        handleSubmit={handleSearchSubmit}
        handleChange={handleSearchChange}
        handleClear={handleSearchClear}
      />
      <Posts postsArr={users} />
    </>
  );
}

export default Blog;
