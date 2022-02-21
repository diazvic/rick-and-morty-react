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
				<Nav />
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
