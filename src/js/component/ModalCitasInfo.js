import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ModalInfoCita = ({ show, handleClose, pacienteInfo, tratamientoInfo }) => {
	const { store, actions } = useContext(Context);
	const [informacionPaciente, setInformacionPaciente] = useState({});
	console.log(
		"show:" +
			show +
			", handleClose: " +
			handleClose +
			"pacienteInfo: " +
			store.infoPaciente.name +
			", tratamientoInfo:" +
			store.tratamiento
	);

	// setInformacionPaciente(store.infoPaciente);

	return (
		<div>
			{store.infoPaciente && (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>Información</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<h2>Paciente:</h2>
						<p>Nombre: {store.infoPaciente.name}</p>
						<p>Apellido: {store.infoPaciente.lastname}</p>
						<p>Correo: {store.infoPaciente.email}</p>
						<p>Teléfono: {store.infoPaciente.phone}</p>
						<p>Cédula: {store.infoPaciente.cedula}</p>
						<p>Fecha de Nacimiento: {store.infoPaciente.fechaDeNacimiento}</p>
						<h2>Tratamiento:</h2>
						<p>Nombre: {store.tratamiento.tratamientoName}</p>
						<p>Descripcion: {store.tratamiento.descripcion}</p>
						<p>Precio: {store.tratamiento.price}</p>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="primary" onClick={handleClose}>
							Aceptar!
						</Button>
						<Button variant="secunadry" onClick={handleClose}>
							Salir
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	);
};

ModalInfoCita.propTypes = {
	pacienteInfo: PropTypes.object,
	tratamientoInfo: PropTypes.object,
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
