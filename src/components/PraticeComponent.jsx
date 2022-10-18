/** @format */

import React from "react";

function PraticeComponent() {
	const [coding, setCoding] = React.useState(true);
	function switchCase() {
		setCoding((prevState) => !prevState);
	}
	// const [count, setCount] = React.useState(0);

	// function handleAddBtn() {
	// 	setCount((prevCount) => prevCount + 1);
	// }
	// function handleMinusBtn() {
	// 	setCount((prevCount) => prevCount - 1);
	// }
	return (
		<div>
			{/* <button onClick={handleMinusBtn}>-</button> */}
			<h1>{coding == true ? "Yes" : "NO"}</h1>
			<button onClick={switchCase}>+</button>
		</div>
	);
}

export default PraticeComponent;
