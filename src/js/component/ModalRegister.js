import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const ModalRegister = ({ show, nombre, handleClose }) => {
	useEffect(() => {
		console.log("show: ", show, " nombre: ", nombre, " func: ", handleClose);
	}, []);
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Soy el título</Modal.Title>
				</Modal.Header>
				<Modal.Body>{"Esto es el cuerpo" + nombre + "ok?"}</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Listo!
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

ModalRegister.propTypes = {
	show: PropTypes.bool,
	nombre: PropTypes.string,
	handleClose: PropTypes.func
};
