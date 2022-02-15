import { useState } from "react";

const Card = ({ name, img, gender, specie, status }) => {
	return (
		<article className="card">
			<img src={img}></img>
			<h1>{name}</h1>
			<p>Género: {gender}</p>
			<p>{specie}</p>
			<p className={`${status === "Dead" ? "rojo" : "verde"}`}>{status}</p>
		</article>
	);
};
export default Card;
