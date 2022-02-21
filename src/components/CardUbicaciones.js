const CardUbicaciones = ({ name, type, dimension, created }) => {
	return (
		<article className="card">
			<h1>Planeta: {name}</h1>
			<h3>Tipo:{type}</h3>
			<h3>{dimension == "unknown" ? "Planeta perdido" : dimension}</h3>
			<h3>Creación: {created}</h3>
		</article>
	);
};

export default CardUbicaciones;
