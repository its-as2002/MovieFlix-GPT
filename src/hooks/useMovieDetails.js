import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_DETAILS_API } from "../Utils/constants";
import { API_OPTIONS } from "../Utils/constants";
import { addMovieDetails } from "../Utils/Slice/movieSlice";
export const useMovieDetails = (id) => {
	const dispatch = useDispatch();
	const fetchMovieDetails = async () => {
		const data = await fetch(
			MOVIE_DETAILS_API + id + "?language=en-US",
			API_OPTIONS
		);
		const movieDetails = await data.json();
		dispatch(addMovieDetails(movieDetails));
	};
	useEffect(() => {
		fetchMovieDetails();
	}, []);
};

export default useMovieDetails;
