page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

page('/', () => {
     console.log('Search Results was clicked')
    $('#search-results').show()
})

page('/home/link1', (ctx) => {
    console.log('Media Details was clicked')
    $('#media-details').show()
})

page('/home/link2', () => {
    console.log('Related Content was clicked')
    $('#related-content').show()
})

page('#sighnup', () => {
    console.log('Sighn up was clicked')
    $('#sighnup').show()
})

page('/home/link4', () => {
    console.log('Login was clicked')
    $('#login').show()
})

page('/home/link5', () => {
    console.log('About us was clicked')
    $('#about-us').show()
})

page.start()