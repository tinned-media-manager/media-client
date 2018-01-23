var app = app || {};

(module => {

  const detailView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#media-details')

  detailView.init = (movie) => {


    // $('.page').hide()
    $('#media-details').empty()


    $view.append(`
    <img id="poster" class="details" src="${images_uri}${img_size}${movie.poster_path}">
    <h1 id="title" class="details">${movie.title}</h1><br>
    <h1 class="details">Released: ${movie.release_date}</h1><br>
    <p class="details">${movie.overview}</p>
    `)



    $view.show()
  }

  module.detailView = detailView

})(app)
