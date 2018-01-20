const images_uri = 'http://image.tmdb.org/t/p'
const position = ["#recommended0", "#recommended1", "#recommended2", "#recommended3"]
var recommended = ["ghost-busters", "back-to-the-future", "spaceballs", "the-martian"]
var popular = ["star-wars-the-last-jedi", "it", "blade-runner-2049", "dunkirk"]

$.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${recommended[0]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${recommended[1]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${recommended[2]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${recommended[3]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${popular[0]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${popular[1]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${popular[2]}`,
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
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${popular[3]}`,
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