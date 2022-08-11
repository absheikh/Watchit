import React from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />{" "}
    </>
  );
};

export default Home;
