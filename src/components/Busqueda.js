const Busqueda = ({ handleOnChange, handleClick }) => {
	return (
		<div>
			<label>
				Iniciar busqueda:
				<input type="text" onChange={handleOnChange}></input>
			</label>
			<button className="boton-busqueda" onClick={handleClick}>
				Buscar
			</button>
		</div>
	);
};

export default Busqueda;
