/** @format */

import React from "react";
import "./CountStyle.css";

function Navbar(props) {
	return (
		<div className='navbar'>
			<h1>Current user: {props.name}</h1>
		</div>
	);
}

export default Navbar;
