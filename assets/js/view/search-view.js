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
      <div class="search-content" data-id="${movie.id}"><h6 data-id="${movie.id}">${movie.title}</h6><img data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}"></div>
      `);
      }
    });

    $('.search-content').on('click','img, h6', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/details/' + id)

    })

    $('#search-results').show();
  };

  module.searchView = searchView;
})(app);