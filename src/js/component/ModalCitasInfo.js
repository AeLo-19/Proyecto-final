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

	setInformacionPaciente(store.infoPaciente);

	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Información</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<h2>Paciente:</h2>
					<p>{pacienteInfo.nombre}</p>
					<p>Apellido: {store.infoPaciente.lastname}</p>
					<p>Correo: {store.infoPaciente.email}</p>
					<p>Teléfono: {store.infoPaciente.phone}</p>
					<p>Cédula: {store.infoPaciente.cedula}</p>
					<p>Fecha de Nacimiento: {store.infoPaciente.fechaDeNacimiento}</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Listo!
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

ModalInfoCita.propTypes = {
	pacienteInfo: PropTypes.object,
	tratamientoInfo: PropTypes.object,
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
