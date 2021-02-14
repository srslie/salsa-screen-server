const express = require('express');
const app = express();
const movieData = require('./data/movieData.js')
const movie = require('./data/movieData.js')
const movieDetails = require('./data/movieDetails.js')
const movieVideos = require('./data/movieVideos.js')

app.use(express.json())
app.set('port', 3001);

app.listen(app.set('port'), () => {
  console.log(`Now listening on port http://localhost:${app.get('port')}!`)
})

app.locals.movies = movieData
app.locals.moviedetails = movieDetails
app.locals.movieVideos = movieVideos

app.get('/api/v1/movies', (request, response) => {
  response.status(200).json(app.locals.movies)
})

app.get('/api/v1/movies/:id', (request, response) => {

  const reqId = request.params.id
  const foundMovieDetails = app.locals.movieDetails[reqId] ? app.locals.movieDetails[reqId] : null

  if (foundMovieDetails) {
    response.status(200).json(app.locals.moviesDetails[reqId])
  } else {
    response.status(404).json({error: `No movie with an id of ${reqId} was found!`})
  }
})

app.get('/api/v1/users/:userId/ratings', (request, response) => {
  response.status(200).json(app.locals.ratings)
})


// app.post('/api/v1/:userId/ratings', (request, response) => {
//   const body = request.body;
//   const id = Date.now()
  
//   for (let requiredParameter of ['movie_id', 'rating']) {
//     if (!sighting[requiredParameter]) {
//       response.status(422).json({
//         error: `Request body is missing a required parameter of ${requiredParameter}. Required format is { movie_id: <Integer>, rating: <Integer between 1 and 10> }`
//       })
//     } else {
//     app.locals.sightings.push({..sighting, id})
//     response.status(201).json({...sighting, id})
//   }

// })

// app.delete('/api/v1//users/:user_id/ratings/:rating_id', (request, response) => {
//   response.status(204)
// })