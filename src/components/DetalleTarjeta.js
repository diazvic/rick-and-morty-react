import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const DetalleTarjeta = () => {
	const params = useParams();

	const [personaje, setPersonaje] = useState([]);

	console.log(params.idPersonaje);
	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${params.idPersonaje}`)
			.then((res) => res.json())
			.then((data) => setPersonaje(data));
	}, []);
	return (
		<div>
			<article className="card">
				<img src={personaje.image} />
				<h1>{personaje.name}</h1>
				<h3>{personaje.status}</h3>
			</article>
		</div>
	);
};

export default DetalleTarjeta;
