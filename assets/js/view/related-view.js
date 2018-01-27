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


    $('.page').hide()
    $('#one').css('overflow-y', 'hidden');
    $('#related-content').empty()


    $view.append(`<h2 class="related align-center" data-id="${movie.id}">Back to Details</h2>
    
    <img id="poster" class="related image" src="${images_uri}${img_size}${movie.poster_path}">
    
    <h1 id="title" class="related align-center">${movie.title}</h1><br>
      <div id="info">
      <h1 class="related" class="related align-center">runtime ${movie.runtime} minutes</h1><br>
      <h1 class="related" class="related align-center">release date ${movie.release_date}</h1><br>
      <h1 class="related" class="related align-center"><a href="${movie.homepage}" target="_blank">Movie Homepage</a></h1><br>
      <h1 class="related" class="related align-center"> movie budget $${movie.budget.toLocaleString()}</h1><br>
      <h1 class="related" class="related align-center"> revenue $${movie.revenue.toLocaleString()}</h1><br>
     </div>
   
    
    <div id="u-tube">
    <iframe id="video" src="${u_tube}${playlist[0]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen ></iframe>
    </div>
 
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
