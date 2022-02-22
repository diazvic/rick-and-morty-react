import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="nav">
			<h2 className="titulo-nav">Rick and Morty</h2>
			<ul className="contenedor-nav">
				<li className="link-nav">
					<Link to="/" style={{ textDecoration: "none", color: "#07a74c" }}>
						Personajes
					</Link>
				</li>
				<li className="link-nav">
					<Link
						to="/ubicaciones"
						style={{ textDecoration: "none", color: "#07a74c" }}
					>
						Ubicaciones
					</Link>
				</li>
				<li className="link-nav">
					<Link
						to="/episodios"
						style={{ textDecoration: "none", color: "#07a74c" }}
					>
						Episodios
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
