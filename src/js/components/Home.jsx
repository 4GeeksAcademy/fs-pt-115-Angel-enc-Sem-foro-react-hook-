import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seleccionColor, setSeleccionColor] = useState("red");
	const [mostrarPurpura, setMostrarPurpura] = useState(false);

	const cambioColor = () => {
		const colores = ["red", "yellow", "green", mostrarPurpura && "purple"].filter(Boolean);
		const indexActual = colores.indexOf(seleccionColor);
		const siguienteIndex = (indexActual + 1) % colores.length;
		setSeleccionColor(colores[siguienteIndex]);
	};

	const añadirPurpura = () => {
		setMostrarPurpura(true);
	};

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