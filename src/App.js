import "../src/Nav.scss";
import "../src/Card.scss";
import "../src/Footer.scss";
import Nav from "./components/Nav";
import Seccion from "./components/Seccion";
import Footer from "./components/Footer";
import Ubicaciones from "./components/Ubicaciones";
import Episodios from "./components/Episodios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DetalleTarjeta from "./components/DetalleTarjeta";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Nav
				// personajes={<Link to="/">Personajes</Link>}
				// ubicaciones={<Link to="/">Ubicaciones</Link>}
				// episodios={<Link to="/">Episodios</Link>}
				/>
				<Routes>
					<Route path="/" element={<Seccion />} />
					<Route path="/ubicaciones" element={<Ubicaciones />} />
					<Route path="/episodios" element={<Episodios />} />
					<Route
						path="/personajes/:idPersonaje"
						element={<DetalleTarjeta />}
					></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;

// import Blog from "./components/Blog";
// import Contacto from "./components/Contacto";
// import Home from "./components/Home";
// const App = () => {
// 	return (
// 		<div>
// 			<BrowserRouter>
// 				<nav>
// 					<Link to="/">Home</Link>
// 					<Link to="/blog">Blog</Link>
// 					<Link to="/contacto">Contacto</Link>
// 				</nav>

// 				<Routes>
// 					<Route path="/" element={<Home />} /> personajes ACA
// 					<Route path="/blog" element={<Blog />} />
// 					<Route path="/contacto" element={<Contacto />} />
// 				</Routes>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default App;
