import React, { useState, useEffect, useContext } from "react";
import emlLogo from "../../img/EML-Isotype.png";
import { Link } from "react-router-dom";
import { ModalRegister } from "../component/ModalRegister";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/register.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [logIn, setLogIn] = useState({
		correo: "",
		clave: ""
	});
	var login = {
		email: logIn.correo,
		password: logIn.clave
	};
	const handleValidation = e => {
		setLogIn({
			...logIn,
			[e.target.name]: e.target.value
		});
	};
	const handleLogIn = e => {
		e.preventDefault();
		console.log("validando");
		if (logIn.correo === "" || logIn.clave === "") {
			console.log("encontramos un problema usted es medio tonto");
		} else {
			console.log("iniciando POST");
			actions.fetchUserLogin(login);
		}
	};
	return (
		<div className="border m-3">
			<div className="border logo m-3 justify-item-center">
				<img src={emlLogo} width="280px" height="240px" />
			</div>
			<form className="border m-3" onSubmit={handleLogIn}>
				<div className="border">
					<h5>Correo electrónico</h5>
					<input
						className="m-2"
						type="text"
						name="correo"
						onChange={handleValidation}
						placeholder="Correo Electrónico"
					/>
					<h5>Contraseña</h5>
					<input
						className="m-2"
						type="password"
						name="clave"
						onChange={handleValidation}
						placeholder="Contraseña"
					/>
				</div>
				<div className="border">
					{/*debo crear un perfil de prueba con su clave en el 
                context para comparar y dar acceso a otra ruta o denegar la vaina*/}
					<button type="button" className="btn btn-primary" onClick={handleLogIn}>
						Entrar
					</button>
				</div>
			</form>
			<div className="borde">
				<Link to="/register">
					<button type="button" className="btn btn-primary">
						Registrarse
					</button>
				</Link>
			</div>
		</div>
	);
};
