import { useState, useEffect } from "react";
import Card from "./Card";
import Busqueda from "./Busqueda";
const Seccion = () => {
	const [valorDelInput, setValorDelInput] = useState("");
	const [buscar, setBuscar] = useState("");
	const handleOnChange = (e) => {
		setValorDelInput(e.target.value);
		console.log(valorDelInput);
	};

	const handleClick = () => {
		setBuscar(valorDelInput);
		console.log(buscar);
	};

	const [busqueda, setBusqueda] = useState([]);

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/?name=${buscar}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.results);
				setBusqueda(data.results);
			});
	}, [buscar]);
	return (
		<div className="busqueda">
			<Busqueda handleOnChange={handleOnChange} handleClick={handleClick} />
			<div className="container">
				{busqueda.map((elemento) => (
					<div key={elemento.id}>
						<Card
							name={elemento.name}
							img={elemento.image}
							gender={elemento.gender}
							specie={elemento.species}
							status={elemento.status}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
export default Seccion;
