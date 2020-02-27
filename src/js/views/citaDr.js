import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Navbar, Nav, ListGroup, List } from "react-bootstrap";
import { ModalInfoCita } from "../component/ModalCitasInfo";

export const CitaDr = () => {
	const [show, setShow] = useState(false);
	const [infoCita, setInfoCita] = useState({
		nombre: "",
		tratamiento: ""
	});
	const openInfo = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};
	return (
		<div>
			<Navbar bg="light" sticky="top" expand="lg">
				<Navbar.Brand href="#home">Estética Medica Vital</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#citas">Citas</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="m-2">
				{/* <ListGroup>
					{store.citas.map(citas => {
						return (
							<List.Item key={citas.id} onClick={openInfo}>
								{tratamientos.tratamientoName}
							</List.Item>
						);
					})}
				</ListGroup> */}
				{/* <ModalInfoCita handleClose={handleClose} show={show} /> */}
			</div>
		</div>
	);
};
