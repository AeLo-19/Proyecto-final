import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button } from "react-bootstrap";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";

export const Home = () => {
	return (
		<div>
			<Navbar />
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
			<div className="d-block w-100">
				<h2>Lista de precios</h2>
				<Button variant="primary">Precios</Button>
			</div>
			<div className="d-block w-100">
				<h2>Citas</h2>
				<Button variant="primary">Pedir Cita</Button>
			</div>
			<div className="d-block w-100">
				<h2>Ayuda</h2>
			</div>
			<Footer />
		</div>
	);
};
