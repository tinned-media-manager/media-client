'use strict';

var app = app || {};

(function(module) {

  const searchView = {};
  const images_uri = 'http://image.tmdb.org/t/p';
  const img_size = '/w300_and_h450_bestv2';

  searchView.init = (movies) => {

   
    $('#one').css('backgroundImage', 'url()');
    $('#search-results').empty()
    $('#search-results').append('<ul class="search-results"></ul>');


    movies.forEach(movie => {
      if (movie.poster_path) {
        $('ul.search-results').append(`
      <li class="search-content" data-id="${movie.id}">
      <img id="search-thumb" data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}">
      <h6 id="search-description" data-id="${movie.id}">${movie.title}</h6><br>
      <p data-id="${movie.id}">${movie.overview}</p>
      </li>
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