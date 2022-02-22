import "../CardEpisodios.scss";
const CardEpisodios = ({ name, id, airDate, episode }) => {
	return (
		<article className="card">
			<img
				className="imagen-episodios"
				src="https://imagenes.elpais.com/resizer/tLofFlByYmVW1PietKZS6MIsigs=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/MUZ3WHYIHCKK3EK5Q6DFGFQE3A.jpg"
			/>
			<h1 className="titulo-episodio">{name}</h1>
			<p>Id:{id}</p>
			<p>Fecha:{airDate}</p>
			<p>Episodio:{episode}</p>
		</article>
	);
};

export default CardEpisodios;
