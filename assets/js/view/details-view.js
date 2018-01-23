var app = app || {};

(module => {

    const detailView = {}
    const images_uri = 'http://image.tmdb.org/t/p'
    const img_size = '/w300_and_h450_bestv2'

    
    const $view = $('#media-details')
    
   detailView.init = (movie) => {

        
        $('.page').hide()
        $('#media-details').empty()
        
        
        $view.append(`<h1>${movie.title}: ${movie.release_date}:${movie.overview}:<img src="${images_uri}${img_size}${movie.poster_path}">`)

        // </h1> <button id="update-book" data-id="book_id">update</button> <button id="delete-book" data-id="book_id">delete</button>
        // $('#update-book').on('click', () => app.Book.update (book, app.bookUpdateView.init))

        // $('#delete-book').on('click', )

        $view.show()
    }
    
    module.detailView = detailView

})(app)
