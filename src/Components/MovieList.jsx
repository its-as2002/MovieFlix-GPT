import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, id }) => {
	// console.log(movies);
	return (
		<div>
			<h1 className="ml-4 text-xl py-2 font-bold text-white">{title} </h1>
			<div className="flex no-scrollbar overflow-y-auto ">
				<div className="flex ">
					{movies.map((movie) => {
						return (
							<div key={movie.id}>
								{movie.backdrop_path && (
									<MovieCard
										photoId={movie.backdrop_path}
										movieName={movie.title}
										id={movie.id}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
