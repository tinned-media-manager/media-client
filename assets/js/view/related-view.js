var app = app || {};

(module => {

  const relatedView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#related-content')

  relatedView.init = (movie) => {


    $('.page').hide()
    $('#related-content').empty()


    $view.append(`<h1>${movie.title}: ${movie.release_date}:${movie.overview}</h1>:<img src="${images_uri}${img_size}${movie.poster_path}">`)



    $view.show()
  }

  module.relatedView = relatedView

})(app)
