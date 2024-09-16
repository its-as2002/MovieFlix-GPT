import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		popularMovies: null,
		backgroundTrailerkey: null,
		movieDetails: null,
		genres: [],
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addBackgroundTrailerKey: (state, action) => {
			state.backgroundTrailerkey = action.payload;
		},
		addGenres: (state, action) => {
			state.genres.push(action.payload);
		},
		addMovieDetails: (state, action) => {
			state.movieDetails = action.payload;
		},
	},
});

export const {
	addBackgroundTrailerKey,
	addNowPlayingMovies,
	addPopularMovies,
	addGenres,
	addMovieDetails,
} = movies.actions;
export default movies.reducer;
