var app = app || {};

(module => {

  const detailView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#media-details')

  detailView.init = (movie) => {


    // $('.page').hide()
    $('#media-details').empty()


    $view.append(`<a  data-id="${movie.id}" href="/home/related">Media Related Content</a>
    <img id="poster" class="details" data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}">
    <h1 id="title" class="details" data-id="${movie.id}">${movie.title}</h1><br>
    <h1 class="details" data-id="${movie.id}">Released: ${movie.release_date}</h1><br>
    <p class="details" data-id="${movie.id}">${movie.overview}</p>
    `)

    $('#media-details').on('click','img, h1, p', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/related/' + id)

    })

    $view.show()
  }

  module.detailView = detailView

})(app)
