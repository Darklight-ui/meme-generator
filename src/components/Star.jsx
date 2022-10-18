/** @format */

import React from "react";

function Star(props) {
	let favStat = props.isFavo ? "Fav" : "Not Fav";
	return (
		<div>
			<b>Fav:</b>
			<button onClick={props.handleClick}>{favStat}</button>
		</div>
	);
}

export default Star;
