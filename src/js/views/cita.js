import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Carousel, Button, Navbar, Nav, Form } from "react-bootstrap";
// import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [cita, setCita] = useState({
		tratamiento: "",
		fecha: ""
	});
	let tratamiento_id = parseInt(cita.tratamiento);
	var crearCita = {
		date: cita.fecha,
		state: "false",
		tratamiento_value: tratamiento_id
	};
	const handleValidation = e => {
		setCita({
			...cita,
			[e.target.name]: e.target.value
		});
	};
	const iniciarValidacion = e => {
		e.preventDefault();
		console.log("validando");
		if (cita.fecha === "" || cita.tratamiento === "") {
			console.log("encontramos un problema");
			setError(true);
		} else {
			actions.fetchPostCita(crearCita);
		}
	};
	var validationError;

	if (error) {
		validationError = (
			<div className="text-danger">
				<p>Verifíque que todos los campos han sido seleccionados.</p>
			</div>
		);
	} else {
		validationError = null;
	}

	useEffect(() => {
		// cargar tratamientos del backend
		const getTratamientos = async () => {
			console.log("bout to fetch");
			let success = await actions.fetchGetTratamientos();
		};
		getTratamientos();

		return () => {
			// cleanup
		};
	}, []);
	if (store.loggedIn) {
	} else {
		return <Redirect to="/" />;
	}

	return (
		<div className="p-1 m-1 texto">
			<Navbar bg="light" sticky="top" expand="lg">
				<Navbar.Brand href="#home">Estetica Medica Vital</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#precios">Ayuda</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<h1>Pedir cita</h1>
			<Form onSubmit={iniciarValidacion}>
				<Form.Group>
					<Form.Label>Seleccione el tratamiento que desea</Form.Label>
					<Form.Control
						as="select"
						value={cita.tratamiento}
						onChange={e => {
							setCita({
								...cita,
								tratamiento: e.target.value
							});
						}}>
						{store.tratamientos &&
							store.tratamientos.map(tratamiento => {
								return (
									<option key={tratamiento.id} value={tratamiento.id}>
										{tratamiento.tratamientoName}
									</option>
								);
							})}
					</Form.Control>
				</Form.Group>

				<div className="col-12 m-1">
					<h5 className="texto">Elija la fecha que desea para su cita</h5>
					<input
						name="fecha"
						className="form-control"
						type="date"
						dateFormat="YYYY/MM/dd"
						onChange={handleValidation}
					/>
				</div>

				<Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
					<div className="col-12">{validationError}</div>
				</Form.Group>
			</Form>
		</div>
	);
};
