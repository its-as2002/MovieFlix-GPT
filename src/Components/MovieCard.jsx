import React from "react";
import { MOVIES_IMG_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ photoId, movieName, id }) => {
	console.log(id);
	return (
		<Link to={"/movie/" + id}>
			<div className="relative w-48 m-3 hover:scale-105 transition-transform shadow-lg rounded-lg overflow-hidden">
				<img
					src={MOVIES_IMG_URL + photoId}
					alt={movieName}
					className="w-full h-72 object-cover"
				/>
				<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
					<p className="text-white text-lg font-bold text-center drop-shadow-lg">
						{movieName}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default MovieCard;
