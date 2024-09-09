import React from "react";

const Header = () => {
	return (
		<div id='logo' className="absolute w-full bg-gradient-to-b from-black" >
			<img src={`${process.env.PUBLIC_URL}/MovieFlix.png`} alt="logo" className="w-44 mx-10 py-10" />
		</div>
	);
};

export default Header;
