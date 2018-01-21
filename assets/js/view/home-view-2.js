var app = app || {};

(module => {

    const homeViewTwo = {}
    const images_uri = 'http://image.tmdb.org/t/p'
    const img_size = '/w300_and_h450_bestv2'

    const $view = $('.popular')



    homeViewTwo.init = (Movie) => {

        $('.page').hide()
       
        $('.popular').empty()
        Movie.forEach(movie=> {
            console.log(movie);
 
            $('.popular').append(`
            <li class="pop-content" data-id="${movie.id}"> <h6>${movie.title}</h6><img src="${images_uri}${img_size}${movie.poster_path}"></li>
            `)
        })
 
      $('.popular').on('click', 'li', (event) => {

        const id = $(event.target).data('id')
        page('/api/movies/one/' + id)

    })    

    $view.show()

    }
    
    module.homeViewTwo = homeViewTwo

}) (app)