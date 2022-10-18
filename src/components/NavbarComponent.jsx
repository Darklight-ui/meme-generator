/** @format */

import React from "react";

function NavbarComponent() {
	return (
		<div className='navbar'>
			<div className='nav--logo'>
				<img
					src={require("../images/logo.png")}
					alt='logo'
					className='nav--img'
				/>
				<h3>Meme Generator</h3>
			</div>
			<div className='nav--menu'>
				<h3>Genrating Fun</h3>
			</div>
		</div>
	);
}

export default NavbarComponent;
