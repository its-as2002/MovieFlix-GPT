import MovieList from "./MovieList";
import {useSelector } from "react-redux";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useGenreMovies } from "../hooks/useGenreMovies";

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
	const popularMovies = useSelector((store) => store?.movies?.popularMovies);
	const genres = useSelector((store) => store?.movies?.genres);
	usePopularMovies();
	useGenreMovies();

	if (!nowPlayingMovies || !popularMovies || !genres) return <>movie not in redux</>;
	// console.log(nowPlayingMovies, popularMovies);
	return (
		<div className="-mt-44 relative">
			<MovieList title={"Now Playing"} movies={nowPlayingMovies} />
			<MovieList title={"Popular"} movies={popularMovies} />
			{
				genres.map((genre,index) => (
					<MovieList key={index} title={genre.genre} movies={genre.movies} />
				))
			}
		</div>
	);
};

export default SecondaryContainer;
