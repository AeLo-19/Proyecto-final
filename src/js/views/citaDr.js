import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Navbar, Nav, ListGroup, List } from "react-bootstrap";
import { ModalInfoCita } from "../component/ModalCitasInfo";
import { Context } from "../store/appContext";

export const CitaDr = () => {
	const { store, actions } = useContext(Context);
	const [fecha, setFecha] = useState("");
	const [estado, setEstado] = useState();
	const [valor, setValor] = useState();
	const [id, setId] = useState();
	// const [pacienteInfo, setPacienteInfo] = useState({});
	// const [tratamientoInfo, setTratamientoInfo] = useState();

	// const openInfo = (pacienteId, tratamientoId) => {
	// 	setShow(true);
	// 	actions.fetchGetTratamientos(tratamientoId);
	// 	actions.fetchGetInfoPaciente(pacienteId);
	// 	setPacienteInfo(store.infoPaciente);
	// 	setTratamientoInfo(store.tratamiento);
	// 	console.log(store.infoPaciente, store.tratamiento);
	// };
	var aceptado = {
		date: fecha,
		state: true,
		tratamiento_value: valor
	};

	// const validarCita = (fechaCita, primerEstado, valorTratamiento, idCita) => {
	// 	setFecha(fechaCita);
	// 	setEstado(primerEstado);
	// 	setValor(parseInt(valorTratamiento));
	// 	setId(parseInt(idCita));

	// 	actions.fetchPutCita(aceptado, id);
	// };

	// const handleClose = () => {
	// 	setShow(false);
	// };
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
						return (
							// onClick={() => openInfo(cita.pacienteId, cita.tratamientoId)}
							<ListGroup.Item key={cita.id} className="col-12 m-1 space-between inline-block">
								Tienes una cita para la fecha: {cita.plannedDate}
								<Button
									variant="success"
									value="aceptar"
									// onClick={validarCita(cita.plannedDate, cita.state, cita.tratamientoId, cita.id)}
								>
									Aceptar
								</Button>
							</ListGroup.Item>
						);
					})}
				</ListGroup>

				{/* {store.infoPaciente && (
					<ModalInfoCita
						pacienteInfo={pacienteInfo}
						tratamientoInfo={tratamientoInfo}
						handleClose={handleClose}
						show={show}
					/>
				)} */}
			</div>
		</div>
	);
};
