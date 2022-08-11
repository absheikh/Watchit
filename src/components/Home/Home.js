import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieTerm = "Tech";
  const showTerm = "Money";
  const dataVideo = useSelector(fetchAsyncMovies(movieTerm));
  const dataShow = useSelector(fetchAsyncShows(showTerm));
  console.log(dataVideo);

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieTerm));
    dispatch(fetchAsyncShows(showTerm));
  }, [dispatch]);
  return (
    <div className="container home-container">
      {Object.keys(dataVideo).length === 0 ||
      Object.keys(dataShow).length === 0 ? (
        <div className="movie-error">...Loading</div>
      ) : (
        <MovieListing />
      )}
    </div>
  );
};

export default Home;
