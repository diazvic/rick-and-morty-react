import { useState, useEffect } from "react";
import CardUbicaciones from "./CardUbicaciones";
const Ubicaciones = () => {
	const [ubicacion, setUbicaciones] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/location")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setUbicaciones(data.results);
			});
	}, []);

	return (
		<div className="container">
			{ubicacion.map((elemento) => (
				<CardUbicaciones
					name={elemento.name}
					type={elemento.type}
					dimension={elemento.dimension}
					created={elemento.created}
				/>
			))}
		</div>
	);
};

export default Ubicaciones;
