var app = app || {};

(module => {

  const homeViewTwo = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'

  const $view = $('.popular')



  homeViewTwo.init = (Movie) => {

    // $('.page').hide()
    $('.popular').empty()
    Movie.forEach(movie=> {
      console.log(movie);

      $('.popular').append(`
            <li class="pop-content" data-id="${movie.id}"> <h6 data-id="${movie.id}">${movie.title}</h6><img data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}"></li>
            `)
    })

    $('.pop-content').on('click','img, h6', (event) => {
      document.getElementById('one').scrollIntoView({behavior: 'smooth', block: 'start'})
      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/details/' + id)

    })

    $view.show()

  }

  module.homeViewTwo = homeViewTwo

}) (app)