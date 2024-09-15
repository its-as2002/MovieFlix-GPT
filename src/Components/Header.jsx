import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
const Header = () => {
	return (
		<div
			id="logo"
			className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between items-center">
			<Link to="/">
				<img
					src={`${process.env.PUBLIC_URL}/MovieFlix.png`}
					alt="logo"
					className="w-44 h-auto mx-10 py-10"
				/>
			</Link>

			{auth.currentUser && (
				<Link
					to="/login"
					onClick={() => {
						signOut(auth).then(() => {
							console.log("Signed out successfully");
						});
					}}
					className="bg-[#e50914] px-4 py-2 font-semibold rounded-lg text-white mx-10 relative overflow-hidden">
					<span className="relative z-10">Sign Out</span>
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-full h-full opacity-50 transform -translate-x-full animate-shine"></div>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Header;
