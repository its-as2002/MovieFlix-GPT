import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGenres } from "../Utils/Slice/movieSlice";
import { API_OPTIONS, GENRE_MOVIE_API } from "../Utils/constants";

export const useGenreMovies = (id) => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchGenreList();
	}, []);
	const fetchGenreList = async () => {
		const genreList = await fetch(
			"https://api.themoviedb.org/3/genre/movie/list?language=en",
			API_OPTIONS
		);
		const genreListData = await genreList.json();
		genreListData.genres.map(async (genre) => {
			const genreMoviesPromise = await fetch(
				GENRE_MOVIE_API + genre.id,
				API_OPTIONS
			);
			const genreMoviesData = await genreMoviesPromise.json();
			dispatch(
				addGenres({ genre: genre.name, movies: genreMoviesData.results })
			);
		});
	};
};

export default useGenreMovies;
