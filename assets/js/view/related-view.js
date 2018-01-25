var app = app || {};

(module => {

  const relatedView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'
  const u_tube = 'https://www.youtube.com/embed/'


  const $view = $('#related-content')

  relatedView.init = (movie) => {

    let playlist = [];

    movie.videos.results.forEach(trailers => {

      playlist.push(trailers.key)

    })
    console.log(playlist)


    // $('.page').hide()
    $('#related-content').empty()


    $view.append(`<h2 data-id="${movie.id}">Back to Details</h2>
    <img src="${images_uri}${img_size}${movie.poster_path}">
    <h1>${movie.title}</h1><br>
    <h1>runtime ${movie.runtime} minutes</h1>
    <h1>release date ${movie.release_date}</h1><br>
    <h1><a href="${movie.homepage}" target="_blank">Movie Homepage</a></h1>
    <h1> movie budget $${movie.budget.toLocaleString()}</h1>
    <h1> revenue $${movie.revenue.toLocaleString()}</h1>
    <iframe width="854" height="480" src="${u_tube}${playlist[0]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
 
    `)
    // console.log(movie.videos.results[4].key);


    $('#related-content').on('click','h2', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/details/' + id)

    })

    $view.show()
  }

  module.relatedView = relatedView

})(app)
