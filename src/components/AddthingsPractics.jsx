/** @format */

import React from "react";

function AddthingsPractics() {
	const [thingsArray, setThingsArray] = React.useState(["thing 1", "thing 2"]);
	function add() {
		setThingsArray((prevState) => {
			return [...prevState, `thing ${prevState.length + 1}`];
		});
	}
	const thingsElem = thingsArray.map((thing) => <p>{thing}</p>);
	return (
		<div>
			<button onClick={add}>Add New Thing</button>
			<div className=''>
				<p>{thingsElem}</p>
			</div>
		</div>
	);
}

export default AddthingsPractics;
