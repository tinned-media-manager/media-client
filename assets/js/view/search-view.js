'use strict';

var app = app || {};

(function(module) {

  const searchView = {};
  const images_uri = 'http://image.tmdb.org/t/p';
  const img_size = '/w300_and_h450_bestv2';

  searchView.init = (movies) => {
    $('.page').hide();
    $('#search-results').append('<div class="search-results"></div>');

    movies.forEach(movie => {
      if (movie.poster_path) {
        $('div.search-results').append(`
      <div class="search-content" data-id="${movie.id}"><h6>${movie.title}</h6><img src="${images_uri}${img_size}${movie.poster_path}"></div>
      `);
      }
    });

    $('#search-results').show();
  };

  module.searchView = searchView;
})(app);