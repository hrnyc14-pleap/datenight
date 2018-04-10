let axios = require('axios');
let config = require('../config');

let searchYelp = (lat, long, radius, price, category, callback) => {
  axios.get('https://api.yelp.com/v3/businesses/search', {
    headers: {Authorization: `Bearer ${config.API_TOKEN}`}, 
    params: {
      latitude: lat,
      longitude: long,
      radius: radius || 17000,
      limit: 50,
      open_now: true,
      price: price,
      categories: category
    }
  })
  .then((res) => {
    callback(JSON.stringify(res.data.businesses));
  })
  .catch((err) => {
    console.log(err);
  })
}

let searchMovies = (genreId, callback) => {
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIE_TOKEN}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1980&with_genres=${genreId}`)
  .then((res) => {
    callback(JSON.stringify(res.data.results));
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports.searchYelp = searchYelp;
module.exports.searchMovies = searchMovies;