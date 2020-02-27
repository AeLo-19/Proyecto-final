// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// export const ModalInfoCita = ({ show, handleClose }) => {
// 	useEffect(() => {
// 		console.log("show: ", show, " func: ", handleClose);
// 	}, []);
// 	return (
// 		<div>
// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header>
// 					<Modal.Title>Información</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>{"Hola " + nombre + ", el  registro ha sido efectivo"}</Modal.Body>
// 				<Modal.Footer>
// 					<Link to="/">
// 						<Button variant="primary" onClick={handleClose}>
// 							Listo!
// 						</Button>
// 					</Link>
// 				</Modal.Footer>
// 			</Modal>
// 		</div>
// 	);
// };

// ModalRegister.propTypes = {
// 	show: PropTypes.bool,
// 	handleClose: PropTypes.func
// };
