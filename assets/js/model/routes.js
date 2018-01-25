page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

page('/', () => {
     console.log('Search Results was clicked')
    $('#search-results').show()
})

page('/home/details/:id', (ctx) => {
    app.Movie.getOne(ctx.params.id).then(movie => {
        app.detailView.init(movie)
    })
    console.log('Media Details was clicked')
    $('#media-details').show()
})

page('/home/related/:id', (ctx) => {
    app.Movie.getRelated(ctx.params.id).then(movie => {
        app.relatedView.init(movie)
    })
    console.log('Related Content was clicked')
    $('#related-content').show()
})

page('/home/sighnup', () => {
    console.log('Sighn up was clicked')
    app.signUpView.init()
    $('.sighnup').show()
})

page('/home/login', () => {
    console.log('Login was clicked')
    $('.login').show()
})

page('/home/aboutus', () => {
    console.log('About us was clicked')
    $('.about-us').show()
})

page()