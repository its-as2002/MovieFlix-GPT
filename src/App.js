import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Login from "./Components/Login";
const appRouter = createBrowserRouter([
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
]);

const App = () => <RouterProvider router={appRouter} />;

export default App;
