import React, { useState, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ModalInfoCita = ({ show, handleClose, pacienteId, tratamientoId }) => {
	const { store, actions } = useContext(Context);
	console.log(
		"show:" +
			show +
			", handleClose: " +
			handleClose +
			"pacienteId: " +
			pacienteId +
			", tratamientoId:" +
			tratamientoId
	);
	if (show) {
	} else {
		useEffect(
			() => {
				const getInfo = async () => {
					console.log("bout to fetch");
					let success = await actions.fetchGetTratamientos(tratamientoId);
					let hecho = await actions.fetchGetInfoPaciente(pacienteId);
				};
				getInfo();
				return () => {
					//cleanup
				};
			},
			[show]
		);
	}
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Información</Modal.Title>
				</Modal.Header>
				<Modal.Body />
				<Modal.Footer>
					<Link to="/home_dr">
						<Button variant="primary" onClick={handleClose}>
							Listo!
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

ModalInfoCita.propTypes = {
	pacienteId: PropTypes.integer,
	tratamientoId: PropTypes.integer,
	show: PropTypes.bool,
	handleClose: PropTypes.func
};
