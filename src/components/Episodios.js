import { useState, useEffect } from "react";
import CardEpisodios from "./CardEpisodios";
const Episodios = () => {
	const [episodio, setEpisodio] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/episode")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setEpisodio(data.results);
			});
	}, []);

	return (
		<div className="container">
			{episodio.map((elemento) => (
				<CardEpisodios
					name={elemento.name}
					id={elemento.id}
					airDate={elemento.air_date}
					episode={elemento.episode}
				/>
			))}
		</div>
	);
};

export default Episodios;
