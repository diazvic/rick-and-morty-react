import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
	return (
		<footer>
			<p className="parrafo-footer">
				Hecho con ❤️ por Yanina Bucca y Victoria Diaz
			</p>
			<ul className="lista">
				<a href="https://github.com/diazvic" target="_blank">
					<GoMarkGithub className="icono" />
				</a>
				<a href="https://github.com/YBucca" target="_blank">
					<GoMarkGithub className="icono" />
				</a>
			</ul>
		</footer>
	);
};
export default Footer;
