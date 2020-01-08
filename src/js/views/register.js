import React, { useState, useEffect, useContext } from "react";
import emlLogo from "../../img/EML-Isotype.png";
import { Link } from "react-router-dom";

import "../../styles/register.scss";

export const Register = () => {
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [isBtnDisable, setIsBtnDisable] = useState(true);
	const [confirmPassword, setconfirmPassword] = useState("");
	const [passwordValid, setPasswordValid] = useState(false);
	const [validation, setValidation] = useState({
		nombre: "",
		apellido: "",
		correo: "",
		edad: "",
		cedula: ""
	});
	const actualizarEstado = e => {
		setconfirmPassword(e.target.value);
	};
	const updateState = e => {
		setPassword(e.target.value);
	};
	const handleValidation = e => {
		setValidation({
			...validation,
			[e.target.name]: e.target.value
		});
	};
	const iniciarValidacion = e => {
		e.preventDefault();
		if (
			validation.name === "" ||
			validation.apellido === "" ||
			validation.correo === "" ||
			validation.edad === "" ||
			validation.cedula === ""
		) {
			setError(true);
		} else {
		}
	};
	useEffect(
		() => {
			if (password.length >= 8) {
				setPasswordValid(true);
				if (confirmPassword === password) {
					setIsBtnDisable(false);
				} else {
					setIsBtnDisable(true);
				}
			} else {
				setPasswordValid(false);
			}
			return () => {};
		},
		[password, confirmPassword]
	);

	var validationError;
	if (error) {
		validationError = (
			<div className="text-danger">
				<p>Debe llenar todos los campos.</p>
			</div>
		);
	} else {
		validationError = null;
	}

	return (
		<div className="border m-2">
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
			<form onSubmit={iniciarValidacion}>
				<div className="col-12 border m-1 form-group">
					<h5 className="texto">Nombres</h5>
					<input
						name="nombre"
						className="form-control"
						type="text"
						placeholder="Names"
						onChange={handleValidation}
					/>
					<h5 className="texto">Apellidos</h5>
					<input
						name="apellido"
						className="form-control"
						type="text"
						placeholder="Last Names"
						onChange={handleValidation}
					/>
				</div>
				<div className="col-12 m-1 border">
					<h5 className="texto">Correo</h5>
					<input
						name="correo"
						className="form-control"
						type="mail"
						placeholder="example@example.com"
						onChange={handleValidation}
					/>
				</div>
				<div className="col-12 m-1">
					<h5 className="texto">Fecha de Nacimiento</h5>
					<input name="edad" className="form-control" type="date" onChange={handleValidation} />
				</div>
				<div className="border m-1 col-12">
					<h5 className="texto">Contraseña</h5>
					<input className="form-control" type="password" onChange={updateState} />
					<h5 className="texto">Confirmar Contraseña</h5>
					<input className="form-control" type="password" onChange={actualizarEstado} />
				</div>
				<div className="border m-1 row">
					<div className="col-12">
						<h5 className="texto">Cédula</h5>
					</div>
					<div className="col-3">
						<select className="form-control">
							<option value="Venezolana" selected>
								V-
							</option>
							<option value="Extranjera">E-</option>
						</select>
					</div>
					<div className="col-9">
						<input name="cedula" className="form-control" placeholder="C.I." onChange={handleValidation} />
					</div>
				</div>
				<div className="border col-12 text-center">
					<button disabled={isBtnDisable} type="submit" className="btn btn-block btn-primary">
						Crear
					</button>
				</div>
				<div className="col-12">{validationError}</div>
			</form>
		</div>
	);
};
