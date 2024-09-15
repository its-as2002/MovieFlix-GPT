import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNowPlaying } from "../hooks/useNowplaying";

const DashBoard = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store?.user);
	useNowPlaying();

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
		return <>Please Wait! Loading.......</>; // loading state  because it takes time to get the user data from the redux store
	}
	const { displayName, email, uid, photoURL } = user;
	return (
		<div>
			<Header />
			<p>Profile Name : {displayName}</p>
			<p>Email : {email}</p>
			<p>UID : {uid}</p>
			<img src={photoURL} alt="profile" />

			<button
				className="bg-blue-500 px-4 py-2 rounded-lg text-white mx-10"
				onClick={() => {
					signOut(auth)
						.then(() => {
							console.log("Sign out successfully");
							navigate("/login");
						})
						.catch((error) => {
							console.log(error.message);
						});
				}}>
				SignOut
			</button>
		</div>
	);
};

export default DashBoard;
