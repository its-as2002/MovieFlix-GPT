import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice/userSlice';
import movieReducer from "./Slice/movieSlice"
const store = configureStore({
	reducer: {
		user: userReducer,
		movies : movieReducer
	},
});

export default store;
