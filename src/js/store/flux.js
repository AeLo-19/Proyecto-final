const getState = ({ getStore, getActions, setStore }) => {
	const ApiUrlRegister = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/register";
	const ApiUrlTratamiento = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/tratamiento";
	const ApiUrlLogin = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/login";

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
							Content_Type: "application/json"
						},
						body: JSON.stringify(login)
					});
					if (response.ok) {
						console.log(response.status);
					}
				} catch (error) {
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
					console.log("EN algo la cagaste.");
					console.log(error);
				}
			},
			fetchGetTratamiento: async () => {
				let tratamientos = [];
				try {
					let response = await fetch(ApiUrlTratamiento, {
						method: "GET",
						headers: {
							"Content-Type": "application/JSOM"
						}
					});
					if (reponse.ok) {
						tratamientos = await response.json();
					} else if (response.stats > 400) {
						console.log("no se encontraron tratamientos");
					}
				} catch (error) {
					console.log("something failed");
					console.log(error);
				}
				setStore({
					tratamientos: tratamientos
				});
			}
		}
	};
};

export default getState;
