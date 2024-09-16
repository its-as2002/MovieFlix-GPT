export const USER_PHOTO =
	"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/04/Itachi-Uchiha.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5";
export const API_KEY = "7e3c492cb8b65bbac2c57bb9fcc02f75";

export const NOWPLAYING_API =
	"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTNjNDkyY2I4YjY1YmJhYzJjNTdiYjlmY2MwMmY3NSIsIm5iZiI6MTcyNjM1MzIzNC4wMzcxNzMsInN1YiI6IjY2ZTYwY2ZhMDUwZjE0ZTRmY2NmM2JjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r-IxuPozV3F166UvsA6ZP1rvKV26UGaaHGVqv4Aaiug",
	},
};

export const MOVIES_IMG_URL =
	"https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

export const POPULAR_API =
	"https://api.themoviedb.org/3/movie/popular?language=en-US&page=2";

export const GENRE_MOVIE_API =
	"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=";
export const MOVIE_DETAILS_API = 'https://api.themoviedb.org/3/movie/'