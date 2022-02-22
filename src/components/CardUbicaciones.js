import "../CardUbicaciones.scss";
const CardUbicaciones = ({ name, type, dimension, created }) => {
	return (
		<article className="card">
			<img
				className="imagen-ubicaciones"
				src="https://i.pinimg.com/originals/9a/0f/4f/9a0f4f4915c64fdc4744cf667af62938.jpg"
			></img>
			<h1 className="ubicacion-planeta">Planeta: {name}</h1>
			<p>Tipo:{type}</p>
			<p>{dimension == "unknown" ? "Planeta perdido" : dimension}</p>
			<p>Creación: {created}</p>
		</article>
	);
};

export default CardUbicaciones;
