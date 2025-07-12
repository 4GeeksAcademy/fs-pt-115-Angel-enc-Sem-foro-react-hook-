//importo React y useState para usar los estados en el componente.
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	// creo una variable de estado(seleccionColor) y uso setSeleccionColor para cambiar el color al hacer clic.
	const [seleccionColor, setSeleccionColor] = useState("red");
	// otra variable de estado booleano (estado inicial false) para indicar si el púrpura debe mostrarse o no.
	const [mostrarPurpura, setMostrarPurpura] = useState(false);
	// Array con los colores. Si mostrarPuspura es true añade "purple" al array.
	const cambioColor = () => {
		const colores = ["red", "yellow", "green", mostrarPurpura && "purple"].filter(Boolean);// para eliminar false o undefined.
		const indexActual = colores.indexOf(seleccionColor);// busco el indice del color actual en el array.
		const siguienteIndex = (indexActual + 1) % colores.length; // sumo 1 al indice actual y uso % para que si llega al final vuelva al principio.
		setSeleccionColor(colores[siguienteIndex]);//cambia al siguiente array.
	};
	
	const añadirPurpura = () => {
		setMostrarPurpura(true);
	};
	//Estructura del componente
	return (
		<> 
			<div className="baseSemaforo pt-5">
				<div className="semaforo">
					<div
						onClick={() => setSeleccionColor("red")}
						className={`light red ${seleccionColor === "red" ? "glow" : ""}`}
					></div>
					<div
						onClick={() => setSeleccionColor("yellow")}
						className={`light yellow ${seleccionColor === "yellow" ? "glow" : ""}`}
					></div>
					<div
						onClick={() => setSeleccionColor("green")}
						className={`light green ${seleccionColor === "green" ? "glow" : ""}`}
					></div>
					{mostrarPurpura && (
						<div
							onClick={() => setSeleccionColor("purple")}
							className={`light purple ${seleccionColor === "purple" ? "glow" : ""}`}
						></div>
					)}
				</div>
			</div>
				<div className="mastil"></div>
			<div className="Botones">
				<button className="btn btn-success" onClick={cambioColor}>Cambio de color</button>
				<button className="btn btn-success" onClick={añadirPurpura}>Añadir nueva luz</button>
			</div>
		</>
	);
};

export default Home;