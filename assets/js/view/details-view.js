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

        

        $view.show()
    }
    
    module.detailView = detailView

})(app)
