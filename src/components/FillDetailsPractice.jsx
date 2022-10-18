/** @format */

import React from "react";
import Star from "./Star";

function FillDetailsPractice() {
	const [info, setInfo] = React.useState({
		name: "Emmanuel",
		phone: "09033322",
		mail: "Emmanuel@mail.com",
		isFav: false,
	});
	// let favStat = info.isFav ? "Fav" : "Not Fav";
	function isfav() {
		setInfo((prevState) => {
			// doing it like thus this becz it is an object.
			return { ...prevState, isFav: !prevState.isFav };
		});
	}
	return (
		<div>
			<p>
				<b>Name:</b> {info.name}
			</p>
			<p>
				<b>Phone:</b> {info.phone}
			</p>
			<p>
				<b>Mail:</b> {info.mail}
			</p>
			<p>
				<Star isFavo={info.isFav} handleClick={isfav} />
				{/* <b>Fav:</b>
				<button onClick={isfav}>{favStat}</button> */}
			</p>
		</div>
	);
}

export default FillDetailsPractice;
