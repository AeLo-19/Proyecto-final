import React, { useState, useEffect, useContext } from "react";
import emlLogo from "../../img/EML-Isotype.png";
import { Link } from "react-router";

import "../../styles/register.scss";

export const Register = () => {
	return (
		<div className="border" m-2>
			<div className="container border">
				<div className="row">
					<div className="col-12 text-center">
						<img src={emlLogo} width="125px" height="125px" />
					</div>
					<div className="col-12 text-center">
						<h1 className="texto">¡Bienvenido!</h1>
					</div>
					<div className="col-12  m-1">
						<p className="texto">Por favor llenar los siguientes datos para su registro.</p>
					</div>
				</div>
			</div>
			<form>
				<div className="col-12 border m-1">
					<h5 className="texto">Nombres</h5>
					<input />
					<h5 className="texto">Apellidos</h5>
					<input />
				</div>
				<div className="col-12 m-1 border">
					<h5 className="texto">Correo</h5>
					<input />
				</div>

				{/*vaina de la edad */}
				{/* <input /> */}
				{/*confirmar que las dos claves sean iguales */}
				<div className="border m-1 col-12">
					<h5 className="texto">Contraseña</h5>
					<input />
					<h5 className="texto">Confirmar Contraseña</h5>
					<input />
				</div>
				<div className="border m-1 col-12">
					<h5 className="texto">Cédula</h5>
					<input />
				</div>

				<Link to="/home">
					<div className="border col-12 text-center">
						<button className="btn primary">Crear</button>
					</div>
				</Link>
			</form>
		</div>
	);
};
