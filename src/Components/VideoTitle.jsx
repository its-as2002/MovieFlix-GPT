import React from 'react'

const VideoTitle = (props) => {
	const [info, setInfo] = React.useState(true);
	return (
		<div className="absolute  text-white pt-80 px-12 w-screen aspect-video bg-gradient-to-r from-black">
			<p className="text-6xl font-bold">{props.title}</p>
			{info && (
				<p className="px-1 font-semibold w-1/2 text-justify pt-2">
					{props.overview}
				</p>
			)}
			<button className="hover:opacity-50 my-3 transition-all w-20 p-2 font-semibold rounded text-black mr-3 bg-white">
				Play
			</button>
			<button
				onClick={() => {
					setInfo(!info);
				}}
				className="hover:opacity-50 my-3 transition-all w-24 p-2 bg-opacity-50 text-white rounded font-semibold bg-gray-500">
				{info ? "Less Info" : "More Info"}
			</button>
		</div>
	);
}

export default VideoTitle;