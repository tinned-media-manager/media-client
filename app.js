const apiKey = 'be9741ce0fd78dc79d18817f20b4743b'
const images_uri = 'http://image.tmdb.org/t/p'
$.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Jack+Reacher`,
    method: 'GET',
    timeout: 2000
  })
  .then(
    data => {
      console.log(data);
      $('#results').append(`<p>${data.results[0].title}</p>`);
      $('#results').append(`<img src="${images_uri}/w300_and_h450_bestv2${data.results[0].poster_path}">`);

    },
    err => {
      console.error(err)
    }
  )