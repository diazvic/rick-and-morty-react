import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="nav">
			<h2 className="titulo-nav">Rick and Morty</h2>
			<ul className="contenedor-nav">
				<Link to="/">Personajes</Link>
				<Link to="/ubicaciones">Ubicaciones</Link>
				<Link to="/episodios">Episodios</Link>
			</ul>
		</nav>
	);
};
export default Nav;
