import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Login from "./Components/Login";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Utils/firebase";
import { addUser, removeUser } from "./Utils/Slice/userSlice";
import DashBoard from "./Components/DashBoard";

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/header",
		element: <Header />,
	},
	{
		path: "/dashboard",
		element: <DashBoard />,
	},
]);

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, email, uid, photoURL } = user;
				dispatch(
					addUser({
						displayName: displayName,
						email: email,
						uid: uid,
						photoURL: photoURL,
					})
					
				);
				
				console.log("User is signed in");
			} else {
				dispatch(removeUser());
				console.log("User is signed out");
			}
		});
		return () => {
			unSubscribe();
		};
	}, []);
	return (
		<RouterProvider router={appRoute}/>
	);
};
export default App;
