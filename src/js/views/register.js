import React, { useState, useEffect, useContext } from "react";
import emlLogo from "../../img/EML-Isotype.png";

import { Context } from "../store/appContext";

import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="border" m-2>
			<div className="container border">
				<div className="row">
					<div className="col-12 text-center">
						<img src={emlLogo} width="125px" height="125px" />
					</div>
					<div className="col-12 text-center">
						<h1 className="titulo">¡Bienvenido!</h1>
						<p className="texto" />
					</div>
				</div>
			</div>
			<form>
				<input />
				<input />
				<div className="border" />
				<input />
				{/*vaina de la edad */}
				<input />
				{/*confirmar que las dos claves sean iguales */}
				<input />
				<input />
			</form>
		</div>
	);
};
