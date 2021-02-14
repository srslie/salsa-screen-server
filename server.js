const cors = require('cors');
const express = require('express');
const app = express();
const movieData = require('./data/movieData.js')

app.use(cors());
app.use(express.json())
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Now listening on port http://localhost:${app.get('port')}!`)
})

app.locals.movies = movieData


app.get('/api/v1/movies', (request, response) => {
  response.status(200).json(app.locals.movies)
})