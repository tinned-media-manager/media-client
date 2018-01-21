'use strict';

var app = app || {};

(function(module) {

  // const api_url = 'http://mhzsys.net:21010/api'; // remote
  const api_url = 'http://localhost:3000/api'; // local

  function Movie() {

  }

  Movie.getPopular = () => {
    return $.getJSON(`${api_url}/movies/popular`).catch(err => console.error(err));
  };

  Movie.getRecommend = () => {
    return $.getJSON(`${api_url}/movies/recommend`).catch(err => console.error(err));
  };

  Movie.getOne = (id) => {
    return $.getJSON(`${api_url}api/movies/one/${id}`).catch(err => console.error(err));
  };

  Movie.searchAll = (title) => {
    return $.getJSON(`${api_url}/movies/${title}`).catch(err => console.error(err));
  };

  Movie.createUser = (user) => {
    $.post(`${api_url}/movies/create_user`, user).catch(err => console.error(err));
  };

  module.Movie = Movie;
})(app);