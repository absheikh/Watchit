import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import user from "../../images/user.jpg";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
    searchTerm = "";
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">Watchit </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleChange}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search Video or Series"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
