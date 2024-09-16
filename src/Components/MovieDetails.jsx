import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MOVIES_IMG_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const MovieDetails = () => {
	const { id } = useParams();
	useMovieDetails(id);
	const movie = useSelector((store) => store?.movies?.movieDetails);

	if (!movie) {
		return <div className="text-center text-3xl p-20">Loading...</div>;
	}

	return (
		<div className="bg-gray-800 min-h-screen py-8 px-4 md:px-8 w-full">
			{/* Movie Header */}
			<Link to="/dashboard">
				<div className="flex justify-center">
					<i className="text-white relative bottom-4 hover:opacity-50   text-3xl ri-home-3-line"></i>
				</div>
			</Link>
			<div className="relative flex flex-col md:flex-row md:items-center mb-10 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-95">
				<img
					src={MOVIES_IMG_URL + `${movie.poster_path}`}
					alt={movie.title}
					className="w-full md:w-1/3 h-auto rounded-lg object-cover"
				/>
				<div className="md:ml-10 mt-5 md:mt-0 p-6">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">
						{movie.title}
					</h1>
					<p className="text-gray-500 italic mb-3">{movie.tagline}</p>
					<div className="flex items-center mb-2 text-gray-700">
						<span className="font-medium">Release Date:</span>
						<span className="ml-2">{movie.release_date}</span>
					</div>
					<div className="flex items-center mb-2 text-gray-700">
						<span className="font-medium">Runtime:</span>
						<span className="ml-2">{movie.runtime} minutes</span>
					</div>
					<div className="flex items-center mb-2 text-gray-700">
						<span className="font-medium">Genres:</span>
						<span className="ml-2">
							{movie.genres.map((genre) => genre.name).join(", ")}
						</span>
					</div>
				</div>
			</div>

			{/* Overview Section */}
			<div className="mb-10 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-95">
				<h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
				<p className="text-gray-700 leading-relaxed">{movie.overview}</p>
			</div>

			{/* Movie Details Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
				<div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-95">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">
						Movie Information
					</h3>
					<ul className="list-inside list-disc text-gray-700">
						<li>
							<strong>Budget:</strong> ${movie.budget.toLocaleString()}
						</li>
						<li>
							<strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
						</li>
						<li>
							<strong>Vote Average:</strong> {movie.vote_average} (
							{movie.vote_count} votes)
						</li>
						<li>
							<strong>Language:</strong>{" "}
							{movie.spoken_languages
								.map((lang) => lang.english_name)
								.join(", ")}
						</li>
						<li>
							<strong>Status:</strong> {movie.status}
						</li>
					</ul>
				</div>
				<div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-95">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">
						Production Companies
					</h3>
					<ul className="list-none text-gray-700">
						{movie.production_companies.map((company) => (
							<li key={company.id} className="mb-2 flex items-center">
								{company.logo_path && (
									<img
										src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
										alt={company.name}
										className="w-12 h-12 object-contain mr-3"
									/>
								)}
								<span>
									{company.name} ({company.origin_country})
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* 
			
			{movie.belongs_to_collection && (
				<div className="mb-10 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-95">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">
						Part of the {movie.belongs_to_collection.name}
					</h3>
					<img
						src={`https://image.tmdb.org/t/p/original${movie.belongs_to_collection.poster_path}`}
						alt={movie.belongs_to_collection.name}
						className="w-full h-72 object-scale-down rounded-lg"
					/>
				</div>
			)} */}

			{/* Movie Homepage */}
			{movie.homepage && (
				<div className="flex gap-3 justify-center">
					<a
						href={movie.homepage}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block font-semibold bg-[#e50914] text-white py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
						Visit Official Website
					</a>
				</div>
			)}
		</div>
	);
};

export default MovieDetails;
