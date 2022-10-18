/** @format */

import "./App.css";
import React from "react";
import MemeComponent from "./components/MemeComponent";
import NavbarComponent from "./components/NavbarComponent";
import Challenge1 from "./Challenges/Challenge1";
import boxes from "../src/Challenges/boxes";
import Box from "./Challenges/Box";
function App() {
	const [square, setSquare] = React.useState(boxes);

	function handleClick(id) {
		setSquare((prevState) => {
			return prevState.map((squares) => {
				return squares.id === id ? { ...squares, on: !squares.on } : squares;
			});
		});
	}

	const squareElem = square.map((box) => (
		<Box key={box.id} id={box.id} on={box.on} handleClick={handleClick} />
	));
	return (
		<div className='app'>
			<NavbarComponent />
			<MemeComponent />
			<Challenge1 showSquare={squareElem} />
		</div>
	);
}

export default App;
