import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addBackgroundTrailerKey } from "../Utils/Slice/movieSlice";

export const useTrailerkey = (id) => {
	const dispatch = useDispatch();
	const fetchMultipleTrailer = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
			API_OPTIONS
		);
		const json = await data.json();
		const filterTrailer = json.results.filter(
			(item) => item.type === "Trailer"
		);

		const trailerKey = !filterTrailer
			? filterTrailer[0].key
			: json.results[0].key;
		dispatch(addBackgroundTrailerKey(trailerKey));
	};
	useEffect(() => {
		fetchMultipleTrailer();
	}, []);
	return <div>useTrailerkey</div>;
};

export default useTrailerkey;
