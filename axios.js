const obtenerPeliculas = async() => {
	try {
		const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
			params: {
				// api_key: '192e0b9821564f26f52949758ea3c473',
				language: 'es-MX'
			},
			headers: {
				'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJlMGI5ODIxNTY0ZjI2ZjUyOTQ5NzU4ZWEzYzQ3MyIsInN1YiI6IjYxODQyMWZlOGVkMDNmMDAyZDA4ZjZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrCdKCx2dZQ7d0WaJpXJaPO_De2iP2rYg9bPon1O3V0'
			}
		})

		console.log(respuesta);
	} catch(error){
		console.log(error);
	}
	
}

obtenerPeliculas();