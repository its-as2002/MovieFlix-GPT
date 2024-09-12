import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./Utils/reduxStore";

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

const App = () => (
	<Provider store={store}>
		<RouterProvider router={appRouter} />
	</Provider>
);
export default App;
