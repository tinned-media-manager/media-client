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
        <li class="rec-content" data-id="${movie.id}"> <h6>${movie.title}</h6><img src="${images_uri}${img_size}${movie.poster_path}"></li>
        `)
    })

    // $('#main-search').keypress(event => {
    //   event.preventDefault()
    //   if(event.which === 13) {
    //     $('.search-results').remove()
    //     let titleSearch = $('#main-search').val()
    //     let urlTitle = titleSearch.split(' ').join('+')
    //     app.Movie.searchAll(urlTitle)
    //     page('/')
    //   }
    // })

    $('.recommended').on('click', 'li', (event) => {
      const id = $(event.target).data('id')
      page('/api/movies/one/' + id)
    })

    $view.show()
  }

  module.homeView = homeView

}) (app)