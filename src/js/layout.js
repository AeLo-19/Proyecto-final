import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./views/login";
import { Register } from "./views/register";
import { Home } from "./views/cita";
import { LoginDr } from "./views/loginDr";
import { CitaDr } from "./views/citaDr";
import { RegisterDr } from "./views/registerDr";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/AD/regist_dr" component={RegisterDr} />
						<Route exact path="/home" component={Home} />
						<Route path="/login/:DR" component={LoginDr} />
						<Route path="/citas_dr" component={CitaDr} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
