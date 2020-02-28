import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Navbar, Nav, ListGroup, List } from "react-bootstrap";
import { ModalInfoCita } from "../component/ModalCitasInfo";
import { Context } from "../store/appContext";

export const CitaDr = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [pacienteId, setPacienteId] = useState();
	const [tratamientoId, setTratamientoId] = useState();
	const [infoCita, setInfoCita] = useState({
		nombre: "",
		tratamiento: ""
	});
	const openInfo = (pacienteInfo, tratamientoInfo) => {
		setShow(true);
		setPacienteId(pacienteInfo);
		setTratamientoId(tratamientoInfo);
		console.log(pacienteId, tratamientoId);
	};
	const handleClose = () => {
		setShow(false);
	};
	useEffect(() => {
		// cargar tratamientos del backend
		const getCitas = async () => {
			console.log("bout to fetch");
			let success = await actions.fetchGetCitas();
		};
		getCitas();

		return () => {
			// cleanup
		};
	}, []);
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
				<ListGroup>
					{store.citas.map(cita => {
						console.log(cita.pacienteId, cita.tratamientoId);
						return (
							<ListGroup.Item onClick={() => openInfo(cita.pacienteId, cita.tratamientoId)} key={cita.id}>
								{cita.plannedDate}
							</ListGroup.Item>
						);
					})}
				</ListGroup>
				<ModalInfoCita
					pacienteId={pacienteId}
					tratamientoId={tratamientoId}
					handleClose={handleClose}
					show={show}
				/>
			</div>
		</div>
	);
};
