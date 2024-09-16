import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";

const Header = (props) => {
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
				<div className="flex items-center">
					{/* Display the user's name */}
					{props?.displayName && (
						<span className="text-white mr-5 font-semibold">
							Welcome, {props.displayName}!
						</span>
					)}

					<Link
						to="/login"
						onClick={() => {
							signOut(auth).then(() => {});
						}}
						className="bg-[#e50914] px-2 py-1.5 font-semibold rounded-md text-white mx-5 relative overflow-hidden">
						<span className="relative z-10">Sign Out</span>
						<div className="absolute inset-0">
							<div className="absolute inset-0 bg-gradient-to-r from-white to-transparent w-full h-full opacity-50 transform -translate-x-full animate-shine"></div>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
