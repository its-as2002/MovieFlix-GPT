import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/Slice/movieSlice";
import { POPULAR_API, API_OPTIONS } from "../Utils/constants";

export const usePopularMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchPopularHomePage();
	}, []);
	const fetchPopularHomePage = async () => {
		try {
			const data = await fetch(POPULAR_API, API_OPTIONS);
			const json = await data.json();
			dispatch(addPopularMovies(json.results)); // Add popular movies to the Redux store
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
};
