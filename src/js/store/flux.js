const getState = ({ getStore, getActions, setStore }) => {
	const ApiUrlRegister = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/register";
	const ApiUrlTratamiento = "https://3000-daf31a1e-5d97-4ac9-9ca4-50d448abe4a1.ws-us02.gitpod.io/tratamiento";

	return {
		store: {
			validRegistration: false
		},
		actions: {
			fetchUserCreate: async registro => {
				try {
					let response = await fetch(ApiUrlRegister, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(registro)
					});
					if (response.ok) {
						await actions.fetchUserCreate();
						ValidRegistration = true;
					}
				} catch (error) {
					console.log("EN algo la cagaste.");
					console.log(error);
				}
			}
		}
	};
};

export default getState;
