import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
// import { LOGIN_BACKGROUND_URL } from "../Utils/constants";
import { validateForm } from "../Utils/validateForm";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Slice/userSlice";
// import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
	const dispatch = useDispatch();
	const [signInForm, setSignInForm] = useState(true);
	const [errorMsg, setErrorMsg] = useState("");
	const emailRef = useRef("");
	const passwordRef = useRef(null);
	const nameRef = useRef(null);
	const handleToggel = () => {
		setSignInForm(!signInForm);
	};
	const handleButtonClick = () => {
		const message = validateForm(
			!signInForm && nameRef.current.value ? nameRef.current.value : "",
			emailRef.current.value,
			passwordRef.current.value
		);
		setErrorMsg(message);
		if (message) return; // if this is true then it will not execute the below code because then the input in the form is not valid
		if (signInForm) {
			signIn().catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMsg(errorMessage + " " + errorCode);
			});; //
		} else {
			//signUpWithEmailAndPassword(auth, email, password)
			signUP().catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMsg(errorMessage + " " + errorCode);
			});;
		}
	};

	const signIn = async () => {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)

		const user = userCredential.user;
		console.log(user);
		const { displayName, email, uid } = userCredential.user;
		dispatch(addUser({ displayName, email, uid }));
	};

	const signUP = async () => {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
		await updateProfile(auth.currentUser, {
			displayName: nameRef.current.value,
			photoURL: "https://motionbgs.com/itachi-uchiha",
		});
		console.log('name updated after sign up');

		const user = userCredential.user;
		const { displayName, email, uid } = userCredential.user;
		dispatch(addUser({ displayName, email, uid }));
	};

	return (
		<div className="relative">
			<Header />
			<div>
				{/* <img
					src={LOGIN_BACKGROUND_URL}
					alt="bg-image"
					className="object-cover w-screen h-screen"
				/> */}
				<video
					className="object-cover min-h-screen"
					src={`${process.env.PUBLIC_URL}/videoBg.mp4`}
					autoPlay
					loop
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
							ref={nameRef}
							className="py-4 px-4 w-80 my-2 rounded-md border border-gray-500 bg-opacity-60 text-white bg-black"
							type="text"
							placeholder="Name"
							required
						/>
					)}
					<input
						ref={emailRef}
						className="py-4 px-4 w-80 my-2 rounded-md bg-opacity-60 border border-gray-500 text-white bg-black"
						type="text"
						placeholder="Email or phone number"
						required
					/>
					<input
						ref={passwordRef}
						className="py-4 px-4 w-80 my-2 rounded-md bg-opacity-60 border border-gray-500 text-white bg-black"
						type="password"
						placeholder="Password"
						required
					/>
					{errorMsg && <p className="text-red-500 w-80 text-sm">{errorMsg}</p>}
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
