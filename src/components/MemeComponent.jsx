/** @format */

import React from "react";
import memes from "./memData";

function MemeComponent() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "https://i.imgflip.com/30b1gx.jpg",
	});

	const [memeImage, setMemeImage] = React.useState(memes);

	let url;
	function getRandomImage() {
		const memesArray = memes.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		url = memesArray[randomNumber].url;
		setMeme((prevState) => ({ ...prevState, randomImage: url }));
	}
	return (
		<div>
			<main>
				<div className='form'>
					<input className='form--input' placeholder='Top Text' type='text' />
					<input
						className='form--input'
						placeholder='Bottom Text'
						type='text'
					/>
					<button onClick={getRandomImage} className='form--btn'>
						Get a new meme image 🖼️
					</button>
				</div>
				<div className='meme--image'>
					<img src={meme.randomImage} alt='meme' />
				</div>
			</main>
		</div>
	);
}

export default MemeComponent;
