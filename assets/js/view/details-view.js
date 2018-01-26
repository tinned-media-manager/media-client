var app = app || {};

(module => {

  const detailView = {}
  const images_uri = 'http://image.tmdb.org/t/p'
  const img_size = '/w300_and_h450_bestv2'


  const $view = $('#media-details')

  detailView.init = (movie) => {

    console.log(movie.images.backdrops[0].file_path);
    let bgPoster = movie.images.backdrops[0].file_path
    


    
    $('#media-details').empty()


    $view.append(`<h2 data-id="${movie.id}">Related Content</h2>
    <img id="poster" class="details" data-id="${movie.id}" src="${images_uri}${img_size}${movie.poster_path}">
    <h1 id="title" class="details" data-id="${movie.id}">${movie.title}</h1><br>
    <h1 class="details" data-id="${movie.id}">Released: ${movie.release_date}</h1><br>
    <h1> rating ${movie.vote_average}</h1>
    <p class="details" data-id="${movie.id}">${movie.overview}</p>
    `)
    
    
    console.log(`${images_uri}/w300${bgPoster}`);
    let backDrop = `${images_uri}/w300${bgPoster}`
    console.log(backDrop);
    document.getElementById("one").style.backgroundImage = `url(${images_uri}/w600${bgPoster})`;
    $('#media-details').on('click','h2', (event) => {

      const id = $(event.target).data('id')
      console.log(id, 'this is the id');
      page('/home/related/' + id)

    })

    $view.show()
  }

  module.detailView = detailView

})(app)
