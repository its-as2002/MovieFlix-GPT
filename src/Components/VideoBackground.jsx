import React from "react";

import useTrailerkey from "../hooks/useTrailerkey";
import { useSelector } from "react-redux";
const VideoBackground = ({ id }) => {
	useTrailerkey(id);
	const key = useSelector((store) => store.movies.backgroundTrailerkey);
	if (!key) {
		return <>Loading...</>;
	}

	return (
		<div className="">
			<iframe
				className="w-screen aspect-video"
				src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&loop=1&playlist=${key}&controls=0`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</div>
	);
};

export default VideoBackground;
