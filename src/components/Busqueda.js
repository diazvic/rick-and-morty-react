const Busqueda = ({ handleOnChange, handleClick }) => {
	return (
		<div>
			<label>
				Busca tu personaje:
				<input type="text" onChange={handleOnChange}></input>
			</label>
			<button className="boton-busqueda" onClick={handleClick}>
				Buscar
			</button>
		</div>
	);
};

export default Busqueda;
