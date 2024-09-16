import { useDispatch } from "react-redux";
import { API_OPTIONS, NOWPLAYING_API } from "../Utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/Slice/movieSlice";
export const useNowPlaying = () => {
	const dispatch = useDispatch();
	const fetchNowPlaying = async () => {
		const data = await fetch(NOWPLAYING_API, API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};
	useEffect(() => {
		fetchNowPlaying();
	}, []);
};
