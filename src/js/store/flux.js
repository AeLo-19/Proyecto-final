const getState = ({ getStore, getActions, setStore }) => {
	const ApiUrlRegister = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/register";
	const ApiUrlTratamiento = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/tratamiento";
	const ApiUrlLogin = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/login";
	const ApiUrlAllCitas = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/citas";
	// const ApiUrlEspecificUserCitas =
	// 	"https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/user/" + store.infoUser.id + "/citas";
	const ApiUrlEspecificCita =
		"https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/user" + {} + "/citas/" + {};

	return {
		store: {
			validRegistration: false,
			loggedIn: false,
			tratamientos: [],
			infoUser: "",
			citas: []
		},
		actions: {
			fetchUserLogin: async login => {
				let infoDeLogin = "";
				let response = await fetch(ApiUrlLogin, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)
				});
				console.log("starting to login");
				console.log(response.status);
				if (response.ok) {
					infoDeLogin = await response.json();
					console.log(infoDeLogin);
					setStore({
						infoUser: infoDeLogin,
						loggedIn: true
					});
				} else {
					let error = await response.json();
					console.log(error);
				}
			},
			fetchUserCreate: async registro => {
				// var validRegistration = store.getStore(validRegistration)
				const store = getStore();

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
				} else {
					console.log("En algo la cagaste.");
					console.log(error);
				}
			},
			fetchGetTratamientos: async () => {
				console.log("really about to fetch");
				let tratamientosNuevos = [];
				let response = await fetch(ApiUrlTratamiento, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				// let responseJson = await response.json();
				console.log(response.ok);
				console.log(response.statusText);
				// console.log(responseJson);
				if (response.ok) {
					tratamientosNuevos = await response.json();
					console.log(tratamientosNuevos);
					setStore({
						tratamientos: tratamientosNuevos
					});
					return true;
				} else {
					let error = await response.json();
					console.log("no se encontraron tratamientos: ", error);
					return false;
				}
			},
			fetchPostCita: async informacion => {
				const store = getStore();
				console.log(informacion);

				let response = await fetch(
					"https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/user/" +
						store.infoUser[0] +
						"/citas",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(informacion)
					}
				);
				console.log(response.status);
				console.log(store.infoUser[0]);
				console.log(informacion);
				if (response.ok) {
					let respuesta = await response.json();
					console.log(respuesta);
					console.log("Cita creada esperando confirmacion del doctor");
				} else {
					let respuesta = await response.json();
					console.log(response.status);
					console.log("Verga ya la cagaste otra vez...");
					console.log(respuesta);
				}
			},
			fetchGetCitas: async () => {
				let citasNuevas = [];
				console.log("Empezando a pedir");
				let response = await fetch(ApiUrlAllCitas, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				console.log(response.status);
				if (response.ok) {
					citasNuevas = await response.json();
					console.log("estas son las citas que hay: " + citasNuevas);
					setStore({
						citas: citasNuevas
					});
				} else {
					let error = await response.json();
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
