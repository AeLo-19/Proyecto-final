import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Navbar, Nav, Form } from "react-bootstrap";
// import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
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
			<Form>
				<Form.Group>
					<Form.Label>Seleccione el tratamiento que desea</Form.Label>
					<Form.Control as="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Elija el horario que desea</Form.Label>
					<Form.Control as="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};
