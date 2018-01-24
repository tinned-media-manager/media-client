var app = app || {};

(module => {

  const relatedView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#related-content')

  relatedView.init = (movie) => {


    // $('.page').hide()
    $('#related-content').empty()


    $view.append(`<a data-id="${movie.id}" href="/home/details">Media Details</a>
    <h1>${movie.title}: ${movie.release_date}:${movie.videos}:${movie.budget}</h1>:<img src="${images_uri}${img_size}${movie.poster_path}">`)


    $('#related-content').on('click','a', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/related/' + id)

    })

    $view.show()
  }

  module.relatedView = relatedView

})(app)
