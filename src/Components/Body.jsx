import React, { useEffect, useState } from "react";
import { API_OPTIONS, MOVIES_IMG_URL, POPULAR_API } from "../Utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
	const [movies, setMovies] = useState("");
	const fetchPopularHomePage = async () => {
		const data = await fetch(POPULAR_API, API_OPTIONS);
		const json = await data.json();
		console.log(json.results);
		setMovies(json.results.slice(0, 4));
	};
	useEffect(() => {
		fetchPopularHomePage();
	}, []);

	return !movies.length ? (
		<></>
	) : (
		<div className="relative min-h-screen bg-black text-white">
			{/* Movie Flix Title */}
			<div className="absolute inset-x-0 top-0 mt-10 text-center">
				<h1 className="text-6xl font-extrabold tracking-widest animate-pulse">
					MovieFlix-GPT
				</h1>
			</div>

			{/* Tagline */}
			<div className="absolute inset-x-0 top-32 text-center">
				<h2 className="text-2xl font-semibold animate-fade-in">
					Watch Anytime, Anywhere – Your Movies, Your Way!
				</h2>
			</div>

			{/* Call-to-Action Button */}
			<Link to="/login" className="absolute inset-x-0 top-56 text-center z-50">
				<div className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-40 mx-auto cursor-pointer">
					Explore Movies
				</div>
			</Link>

			{/* Background Animation */}
			<div className="absolute inset-0 flex justify-center items-center">
				<div className="w-96 h-96 bg-gradient-to-r from-red-600 to-transparent rounded-full animate-spin-slow opacity-20"></div>
			</div>

			{/* Movie Section (Popular Movies) */}
			<div id="movies" className="pt-96 text-center">
				<h2 className="text-4xl font-bold mt-20">Popular Movies</h2>
				<p className="text-lg mt-4">
					Explore a wide collection of blockbusters
				</p>

				{/* Movie Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto px-10">
					{movies.map((movie) => (
						<div
							key={movie.id}
							className="bg-gray-800 p-4 rounded-lg shadow-lg">
							<img
								src={MOVIES_IMG_URL + `${movie.backdrop_path}`}
								alt="Movie Poster"
								className="rounded-lg"
							/>
							<h3 className="text-xl mt-4 font-bold">{movie.original_title}</h3>
							<p className="text-sm text-gray-400">{movie.overview}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Body;
