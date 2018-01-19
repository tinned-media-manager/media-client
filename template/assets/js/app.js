const images_uri = 'http://image.tmdb.org/t/p'
$.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=ghost-busters`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#recommended01').append(`<h6>${data.results[0].title}</h6>`);
      $('#recommended01').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=back-to-the-future`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#recommended02').append(`<h6>${data.results[0].title}</h6>`);
      $('#recommended02').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=spaceballs`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#recommended03').append(`<h6>${data.results[0].title}</h6>`);
      $('#recommended03').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )
  
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=the-martian`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#recommended04').append(`<h6>${data.results[0].title}</h6>`);
      $('#recommended04').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )    

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=star-wars-the-last-jedi`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#popular01').append(`<h6>${data.results[0].title}</h6>`);
      $('#popular01').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=it`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#popular02').append(`<h6>${data.results[0].title}</h6>`);
      $('#popular02').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )  

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=blade-runner-2049`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#popular03').append(`<h6>${data.results[0].title}</h6>`);
      $('#popular03').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )

  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=dunkirk`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#popular04').append(`<h6>${data.results[0].title}</h6>`);
      $('#popular04').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )   