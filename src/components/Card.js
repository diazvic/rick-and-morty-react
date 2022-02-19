import { Link } from "react-router-dom";
const Card = ({ name, img, gender, specie, key }) => {
	return (
		<article className="card">
			<img src={img}></img>
			<h1>{name}</h1>
			<p>Género: {gender}</p>
			<p>{specie}</p>
			<Link to={`/personajes/${key}`}>
				<span>Ver mas detalle</span>
			</Link>
		</article>
	);
};
export default Card;
