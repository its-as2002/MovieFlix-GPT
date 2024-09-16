import React from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNowPlaying } from "../hooks/useNowplaying";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const DashBoard = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store?.user);
	useNowPlaying(); // fetching movie through api;

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				// If the user is logged in, navigate to the dashboard
				navigate("/login");
			}
		});
		// Cleanup the listener on component unmount
		return () => unsubscribe();
	}, []);

	if (!user) {
		return <div className="text-center text-3xl p-20">Loading...</div>;
		// loading state  because it takes time to get the user data from the redux store
	}

	const { displayName } = user;
	return (
		<div className="bg-black">
			<Header displayName={displayName} />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default DashBoard;
