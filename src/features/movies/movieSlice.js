import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../common/APIs/movieAPI";
import { API_KEY } from "../../common/APIs/apiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieAPI
      .get(`?apiKey=${API_KEY}&s=${term}&type=movie`)
      .catch((err) => console.log("Err: ", err));
    return response.data;
  }
);

//Series
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieAPI
      .get(`?apiKey=${API_KEY}&s=${term}&type=series`)
      .catch((err) => console.log("Err: ", err));
    return response.data;
  }
);

//Fetching single
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieAPI
      .get(`?apiKey=${API_KEY}&i=${id}&Plot=full`)
      .catch((err) => console.log("Err: ", err));
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  movieOrShow: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.movieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movieOrShow: payload };
    },
  },
});

export const { removeDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShow = (state) => state.movies.movieOrShow;
export default movieSlice.reducer;
