var app = app || {};

(module => {

  const homeView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'

  const $view = $('.recommended')

  homeView.init = (Movie) => {

    $('.page').hide()

    $('.recommended').empty()
    Movie.forEach(movie=> {
      console.log(movie);

      $('.recommended').append(`
            <li class="rec-content" data-id="${movie.id}"> <h6 data-id="${movie.id}">${movie.title}</h6><img data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}"></li>
            `)
    })

    $('.rec-content').on('click','img, h6',(event) => {
      console.log(event.target);
      let id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/details/' + id)
    })

    $view.show()
  }

  module.homeView = homeView

})(app)