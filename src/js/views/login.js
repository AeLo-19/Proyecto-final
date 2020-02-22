import React from "react";
import emlLogo from "../../img/EML-logo.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Login = () => (
	<div className="border m-3">
		<div className="border logo m-3 justify-item-center">
			<img src={emlLogo} width="280px" height="240px" />
		</div>
		<form className="border m-3">
			<div className="border">
				<h5>Correo electrónico</h5>
				<input className="m-2" type="text" name="email" placeholder="Correo Electrónico" />
				<h5>Contraseña</h5>
				<input className="m-2" type="text" name="password" placeholder="Contraseña" />
			</div>
			<div className="border">
				{/*debo crear un perfil de prueba con su clave en el 
                context para comparar y dar acceso a otra ruta o denegar la vaina*/}
				<button type="button" className="btn btn-primary">
					Entrar
				</button>
			</div>
			<div className="borde">
				<Link to="/register">
					<button type="button" className="btn btn-primary">
						Registrarse
					</button>
				</Link>
			</div>
			<div className="col-12">
				<div className="col-6 inline-block">
					{/* <p className="text-muted">
						Si usted trabaja acá haga click
						<Link to="/login/:loginDr">
							<p className="text-muted text-primary">AQUÍ</p>
						</Link>
					</p> */}
				</div>
			</div>
		</form>
	</div>
);
