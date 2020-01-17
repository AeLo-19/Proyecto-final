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
						<Nav.Link href="#precios">Precios</Nav.Link>
						<Nav.Link href="#citas">Citas</Nav.Link>
						<Nav.Link href="#ayuda">Ayuda</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/800x400.png/09f/fff"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/800x400.png/09f/fff"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://via.placeholder.com/800x400.png/09f/fff"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="d-block w-100 m-2" name="precios">
				<h2>Lista de precios</h2>
				<p>Para saber el precios del tratamiento de su elección seleccionelo.</p>
				{/* <Button variant="primary">Precios</Button> */}
				<div ClassName="col-12">
					<select name="select" ClassName="form-control col-6">
						<option value="value1">Value 1</option>
						<option value="value2" selected>
							Elige tu tratamiento!
						</option>
						<option value="value3">Value 3</option>
					</select>
					<label className=" mt-3 mb-3 col-6">Yo voy a cambiar y mostrar el precio</label>
				</div>
				<p className="text-muted">Los precios están sujetos a cambios.</p>
			</div>
			<div className="d-block w-100" name="citas">
				<h2>Citas</h2>
				<p>
					Para poder reservar el día de su cita por favor haga click en el botón y dirijase a la proxima
					ventana.
				</p>
				<Button variant="primary">Pedir Cita</Button>
			</div>
			<div className="d-block w-100" name="ayuda">
				<h2>Ayuda</h2>
			</div>
		</div>
	);
};
