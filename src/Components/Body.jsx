import { MOVIES_IMG_URL} from "../Utils/constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"; // Import the Shimmer component
import { useSelector } from "react-redux";
import { usePopularMovies } from "../hooks/usePopularMovies";

const Body = () => {
	const movies = useSelector((store) => store?.movies?.popularMovies);
	usePopularMovies(); // Fetch popular movies from the API
	if(!movies) return <Shimmer />; // Show shimmer effect while loading
	

	return (
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
				<div className="flex no-scrollbar overflow-y-auto">
					<div className="flex gap-8 mt-10 mx-auto px-10">
						{movies.map((movie) => (
							<div
								key={movie.id}
								className="bg-gray-800 p-4 rounded-lg shadow-lg relative w-72">
								<img
									src={MOVIES_IMG_URL + `${movie.backdrop_path}`}
									alt="Movie Poster"
									className="rounded-lg"
								/>
								<h3 className="text-xl mt-4 font-bold">{movie.title}</h3>
								<p className="text-sm text-gray-400">{movie.overview}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
