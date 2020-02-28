import React, { useState, useEffect, useContext } from "react";
import emlLogo from "../../img/EML-Isotype.png";
import { Link } from "react-router-dom";
import { ModalRegister } from "../component/ModalRegister";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [isBtnDisable, setIsBtnDisable] = useState(true);
	const [confirmPassword, setconfirmPassword] = useState("");
	const [passwordValid, setPasswordValid] = useState(false);
	const [info, setInfo] = useState({
		nombre: "",
		apellido: "",
		correo: "",
		edad: "",
		cedula: "",
		telefono: ""
	});
	const [show, setShow] = useState(false);
	const [primeraCarga, setPrimeraCarga] = useState(true);
	var registro = {
		name: info.nombre,
		lastname: info.apellido,
		email: info.correo,
		password: password,
		dateOfBirth: info.edad,
		cedula: info.cedula,
		phone: info.telefono
	};
	useEffect(
		() => {
			setPrimeraCarga(false);

			if (primeraCarga) {
			} else {
				setShow(true);
			}
		},
		[store.validRegistration]
	);
	const actualizarEstado = e => {
		setconfirmPassword(e.target.value);
	};
	const updateState = e => {
		setPassword(e.target.value);
	};
	const handleValidation = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value
		});
	};

	const iniciarValidacion = e => {
		e.preventDefault();
		console.log("validando");
		if (
			info.nombre === "" ||
			info.apellido === "" ||
			info.correo === "" ||
			info.edad === "" ||
			info.cedula === "" ||
			info.telefono === ""
		) {
			console.log("encontramos un problema");
			setError(true);
		} else {
			actions.fetchUserCreate(registro);
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

	const handleClose = () => {
		setShow(false);
	};

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
		<div className=" m-2">
			<div className="container ">
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
				<div className="col-12  m-1 form-group">
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
				<div className="col-12 m-1 ">
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
					<input
						name="edad"
						className="form-control"
						type="date"
						dateFormat="YYYY/MM/dd"
						onChange={handleValidation}
					/>
				</div>
				<div className=" m-1 col-12">
					<h5 className="texto">Contraseña</h5>
					<small className="form-text text-muted">Mínimo 8 caracteres</small>
					<input className="form-control" type="password" onChange={updateState} />
					<h5 className="texto">Confirmar Contraseña</h5>
					<input className="form-control" type="password" onChange={actualizarEstado} />
				</div>
				<div className=" m-1 row">
					<div className="col-12">
						<h5 className="texto">Cédula</h5>
					</div>
					<div className="col-3">
						<select className="form-control" defaultValue={"Venezolana"}>
							<option value="V-">V-</option>
							<option value="E-">E-</option>
						</select>
					</div>
					<div className="col-9">
						<input name="cedula" className="form-control" placeholder="C.I." onChange={handleValidation} />
					</div>
				</div>
				<div className="col-12  m-1 form-group">
					<h5 className="texto">Teléfono</h5>
					<input className="form-control" name="telefono" type="text" onChange={handleValidation} />
				</div>
				<div className=" col-12 text-center">
					<button disabled={isBtnDisable} type="submit" className="btn btn-block btn-primary">
						Crear
					</button>
				</div>
				<div className="col-12">{validationError}</div>
			</form>
			<ModalRegister handleClose={handleClose} show={show} nombre={info.nombre} />
		</div>
	);
};
