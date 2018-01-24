var app = app || {};

(module => {

  const relatedView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#related-content')

  relatedView.init = (movie) => {


    // $('.page').hide()
    $('#related-content').empty()


    $view.append(`<h2 data-id="${movie.id}">Back to Details</h2>
    <img src="${images_uri}${img_size}${movie.poster_path}">
    <h1>${movie.title}</h1><br>
    <h1>${movie.release_date}</h1><br>
    <h1>${movie.videos}:${movie.budget}</h1>
    `)


    $('#related-content').on('click','h2', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/details/' + id)

    })

    $view.show()
  }

  module.relatedView = relatedView

})(app)
