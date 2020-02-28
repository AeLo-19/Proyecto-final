import React from "react";
import emlLogo from "../../img/EML-logo.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const LoginDr = () => (
	<div className=" m-3">
		<h4 className="m-3">Página Ejecutiva</h4>
		<div className=" logo m-3 justify-item-center">
			<img src={emlLogo} width="280px" height="240px" />
		</div>
		<form className=" m-3">
			<div className="">
				<h5>Correo electrónico</h5>
				<input className="m-2" type="text" name="email" placeholder="Correo Electrónico" />
				<h5>Contraseña</h5>
				<input className="m-2" type="text" name="password" placeholder="Contraseña" />
			</div>
			<div className="">
				{/*debo crear un perfil de prueba con su clave en el 
                context para comparar y dar acceso a otra ruta o denegar la vaina*/}
				<button type="button" className="btn btn-primary">
					Entrar
				</button>
			</div>
			<div className="borde" />
		</form>
	</div>
);
