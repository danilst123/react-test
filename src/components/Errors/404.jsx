import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import ReturnBackLink from "../ReturnBackLink/ReturnBackLink";

function Page404() {
  return (
    <>
      <ReturnBackLink>Home</ReturnBackLink>
      <PageTitle>Eror 404</PageTitle>
    </>
  );
}

export default Page404;
