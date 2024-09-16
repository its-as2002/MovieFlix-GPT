import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store?.movies?.popularMovies);

	if (!movies) return;
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const backgroundMovie = movies[getRandomInt(0, movies.length - 1)];
	const { overview, title, id } = backgroundMovie;
	return (
		<div>
			<VideoTitle overview={overview} title={title} />
			<VideoBackground id={id} />
		</div>
	);
};

export default MainContainer;
