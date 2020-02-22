import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Navbar, Nav } from "react-bootstrap";
// import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div className="p-1 m-1 texto">
			<Navbar bg="light" sticky="top" expand="lg">
				<Navbar.Brand href="#home">Estética Medica Vital</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#citas">Citas</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="d-block w-100" name="citas">
				<h2>Citas</h2>
				<p>
					Haga click en el botón para ver las citas que tiene pendiente.
				</p>
				<Button variant="primary">Pedir Cita</Button>
			</div>
			<div className="d-block w-100" name="ayuda">
				<h2>Ayuda</h2>
			</div>
		</div>
	);
};
