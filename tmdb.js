// https://api.themoviedb.org/3/movie/550?api_key=f21f9a3af90d3b652b0fefe8ced2e831
// https://api.themoviedb.org/3/movie/popular?api_key=f21f9a3af90d3b652b0fefe8ced2e831&language=fr-FR

/**
 * Retourne la liste des films à venir
 * @returns {Promise<{poster_path: string, title: string}[]>}
 */
const getMovies = async () =>
  await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=f21f9a3af90d3b652b0fefe8ced2e831&language=fr-FR'
  )
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((error) => console.error('error >', error))

export { getMovies }
