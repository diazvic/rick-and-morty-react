import { Link } from "react-router-dom";
const Card = ({ name, img, gender, specie }) => {
	return (
		<article className="card">
			<img src={img}></img>
			<h1>{name}</h1>
			<p>Género: {gender}</p>
			<p>{specie}</p>
		</article>
	);
};
export default Card;
