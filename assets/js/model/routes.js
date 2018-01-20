page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

page('/', () => {
     console.log('Search Results was clicked')
    $('#search-results').show()
})

page('/home/details', (ctx) => {
    console.log('Media Details was clicked')
    $('#media-details').show()
})

page('/home/related', () => {
    console.log('Related Content was clicked')
    $('#related-content').show()
})

page('/home/sighnup', () => {
    console.log('Sighn up was clicked')
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