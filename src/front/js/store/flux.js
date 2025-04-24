const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: localStorage.getItem('token') || false,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getUserData: async () =>{
				try {
					const response =await fetch(process.env.BACKEND_URL+ '/api/protected',{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${localStorage.getItem('token')}`
						},
					})
					if(!response.ok) throw new Error("error fetching user data");
					const data = await response.json()
					console.log(data)
					setStore({user: data.user})
				} catch (error) {
					console.error(error)
				}
			},

			register: async (formData) =>{
				try {
					const response =await fetch(process.env.BACKEND_URL+ '/api/register',{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formData)
					})
					if(!response.ok) throw new Error("error registering");
					const data = await response.json()
					console.log(data)
					localStorage.setItem('token', data.token)
					setStore({auth: true, token: data.token})
					return true
				} catch (error) {
					console.error(error)
					return false
				}
			},
			login: async (formData) =>{
				try {
					const response =await fetch(process.env.BACKEND_URL+ '/api/login',{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formData)
					})
					if(!response.ok) throw new Error("error logging in");
					const data = await response.json()
					console.log(data)
					localStorage.setItem('token', data.token)
					setStore({auth: true, token: data.token})
					return true
				} catch (error) {
					console.error(error)
					return false
				}
			},
			logout: () =>{
				localStorage.removeItem('token')
				setStore({auth: false, token: null})
			},
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;