// src/components/Shimmer.js

import React from "react";

const Shimmer = () => (
	<div className="relative min-h-screen bg-black text-white">
		{/* Movie Flix Title Shimmer */}
		<div className="absolute inset-x-0 top-0 mt-10 text-center">
			<div className="bg-gray-700 h-10 w-64 mx-auto rounded-md shimmer"></div>
		</div>

		{/* Tagline Shimmer */}
		<div className="absolute inset-x-0 top-32 text-center">
			<div className="bg-gray-700 h-8 w-80 mx-auto rounded-md shimmer"></div>
		</div>

		{/* Call-to-Action Button Shimmer */}
		<div className="absolute inset-x-0 top-56 text-center">
			<div className="bg-gray-700 h-12 w-40 mx-auto rounded-lg shimmer"></div>
		</div>

		{/* Background Animation Placeholder */}
		<div className="absolute inset-0 flex justify-center items-center">
			<div className="w-96 h-96 bg-gray-700 rounded-full shimmer"></div>
		</div>

		{/* Movie Section Shimmer */}
		<div id="movies" className="pt-96 text-center">
			<div className="bg-gray-700 h-10 w-48 mx-auto rounded-md shimmer"></div>
			<div className="bg-gray-700 h-6 w-64 mx-auto mt-4 rounded-md shimmer"></div>

			{/* Movie Cards Grid Shimmer */}
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto px-10">
				{Array(4)
					.fill()
					.map((_, index) => (
						<div
							key={index}
							className="bg-gray-700 p-4 rounded-lg shadow-lg shimmer"></div>
					))}
			</div>
		</div>
	</div>
);

export default Shimmer;
