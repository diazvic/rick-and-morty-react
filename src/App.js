import "../src/Nav.scss";
import "../src/Card.scss";
import "../src/Footer.scss";
import Nav from "./components/Nav";
import Seccion from "./components/Seccion";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Nav />
			<Seccion />
			<Footer />
		</div>
	);
};

export default App;
