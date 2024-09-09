import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { LOGIN_BACKGROUND_URL } from "../Utils/constants";
import { validateForm } from "../Utils/validateForm";

const Login = () => {
	const [signInForm, setSignInForm] = useState(true);
	const [errorMsg, setErrorMsg] = useState("");
	const email = useRef("");
	const password = useRef(null);
	const name = useRef(null);
	const handleToggel = (e) => {
		setSignInForm(!signInForm);
	};
	const handleButtonClick = () => {
		const message = validateForm(
			!signInForm && name.current.value ? name.current.value : "",
			email.current.value,
			password.current.value
		);
		setErrorMsg(message);
	};

	return (
		<div className="relative">
			<Header />
			<div>
				<img
					src={LOGIN_BACKGROUND_URL}
					alt="bg-image"
					className="object-cover w-full h-screen"
				/>
			</div>
			<div
				id="form"
				className="absolute top-1/4 left-1/2 -translate-x-1/2 px-16 py-2  bg-black bg-opacity-70  ">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="flex flex-col opacity-500 ">
					<p className="font-bold text-3xl text-white my-7">
						{signInForm ? "Sign In" : "Sign Up"}
					</p>
					{!signInForm && (
						<input
							ref={name}
							className="py-4 px-4 w-80 my-2 rounded-md border border-gray-500 bg-opacity-60 text-white bg-black"
							type="text"
							placeholder="Name"
							required
						/>
					)}
					<input
						ref={email}
						className="py-4 px-4 w-80 my-2 rounded-md bg-opacity-60 border border-gray-500 text-white bg-black"
						type="text"
						placeholder="Email or phone number"
						required
					/>
					<input
						ref={password}
						className="py-4 px-4 w-80 my-2 rounded-md bg-opacity-60 border border-gray-500 text-white bg-black"
						type="password"
						placeholder="Password"
						required
					/>
					{errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
					<button
						type="submit"
						onClick={handleButtonClick}
						className="px-5 py-2 my-5 rounded-md bg-[#E50914] text-white font-semibold">
						{signInForm ? "Sign In" : "Sign Up"}
					</button>
					<p className=" text-md text-white text-center">OR</p>
					<button
						type="submit"
						onClick={handleToggel}
						className="px-5 py-2 my-5 rounded-md bg-gray-500 bg-opacity-40 text-white font-semibold">
						{signInForm
							? "New to MovieFlix? Sign Up Now"
							: "Already Registered? Sign In Now"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
