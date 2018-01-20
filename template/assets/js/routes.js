page('/*', (ctx, next) => {
    $('.page').hide();
    next();
  });

page('/', () => {
     console.log('Home was clicked')
    $('#home-view').show()
})

page('/home/link1', (ctx) => {
    console.log('Link 1 was clicked')
    $('#home-link1').show()
})

page('/home/link2', () => {
    console.log('Link 2 was clicked')
    $('#home-link2').show()
})

page.start()