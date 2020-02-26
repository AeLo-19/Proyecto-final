import { push } from "react-router-dom";
const getState = ({ getStore, getActions, setStore }) => {
	const ApiUrlRegister = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/register";
	const ApiUrlTratamiento = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/tratamiento";
	const ApiUrlLogin = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/login";
	const ApiUrlAllCitas = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/citas";
	const ApiUrlEspecificUserCitas =
		"https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/user/" + {} + "/citas";
	const ApiUrlEspecificCita =
		"https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/user" + {} + "/citas" + {};

	return {
		store: {
			validRegistration: false,
			tratamientos: []
		},
		actions: {
			fetchUserLogin: async login => {
				try {
					let response = await fetch(ApiUrlLogin, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(login)
					});
					console.log(response.status);
					console.log(response.json);
					if (response.ok) {
						// push("/home");
					}
				} catch (error) {
					console.log(response.status);
					console.log("En algo la cagaste");
					console.log(error);
				}
			},
			fetchUserCreate: async registro => {
				// var validRegistration = store.getStore(validRegistration)
				const store = getStore();
				try {
					let response = await fetch(ApiUrlRegister, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(registro)
					});
					console.log(response.status);
					console.log("ya se creó el usuario, desplegando modal");
					if (response.status == 201) {
						console.log(response.status);
						// validRegistration = true;
						setStore({
							validRegistration: true
						});
					}
				} catch (error) {
					console.log("En algo la cagaste.");
					console.log(error);
				}
			},
			fetchGetTratamientos: async () => {
				const store = getStore();
				let tratamientosNuevos = [];
				try {
					let response = await fetch(ApiUrlTratamiento, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (reponse.ok) {
						tratamientosNuevos = await response.json();
						console.log(tratamientosNuevos);
						setStore({
							tratamientos: tratamientosNuevos
						});
					} else if (response.status > 400) {
						console.log("no se encontraron tratamientos");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
			},
			fetchPostCita: async informacion => {
				const store = getStore();
				try {
					let response = await fetch(ApiUrlEspecificUserCitas, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(informacion)
					});
					console.log(response.status);
					console.log("Cita creada esperando confirmacion del doctor");
				} catch (error) {
					console.log("Verga ya la cagaste otra vez...");
					console.log(error);
				}
			},
			fetchGetCitas: async () => {
				const store = getStore();
				let citasNuevas = [];
				try {
					let response = await fetch(ApiUrlAllCitas, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSON"
						}
					});
					if (response.ok) {
						citasNuevas = await response.json();
						setStore({
							citas: citasNuevas
						});
					}
				} catch (error) {
					console.log("Se nota que no entiendes muy bien esta vaina");
					console.log(error);
				}
			},
			fetchPutCita: async aceptado => {
				const store = getStore();
				try {
					let response = await fetch(ApiUrlEspecificCita, {
						method: "PUT",
						headers: {
							"Content-Type": "application/JSON"
						},
						body: {}
					});
					if (response.ok) {
						// console.log(response.json());
						console.log("Bien hecho has aceptado una cita");
					} else {
						console.log("En algo la cagaste... otra vez");
						console.log(response.status);
						console.log(response.statusText);
						console.log(response.json());
					}
				} catch (error) {
					console.log("Ya no te diré nada chimbo WEBON");
					console.log(error);
				}
			}
		}
	};
};

export default getState;
