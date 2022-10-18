/** @format */

import "../components/CountStyle.css";
import React from "react";
import Count from "./Count";

function CountComponent() {
	const [count, setCount] = React.useState(0);

	function add() {
		setCount((prevState) => prevState + 1);
	}
	function minus() {
		setCount((prevState) => prevState - 1);
	}
	return (
		<div className='counter'>
			<div className='plus' onClick={add}>
				+
			</div>
			<Count number={count} />
			<div className='minus' onClick={minus}>
				-
			</div>
		</div>
	);
}

export default CountComponent;
