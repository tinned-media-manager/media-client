'use strict';

sign - up - form.initCreateView = function() {
  $('.page').hide();
  $('.input').empty();
  $('#sign-up-form').show();
  $('#sign-up-form').on('submit', event => {
    event.preventDefault();
    let firstName = $('#name').val(),
      let lastName = $('#last-name').val(),
      let apiKey = $('#abi-key').val(),
      let userEmail = $('#email').val(),
      let password = $('#password').val()
    let repeatPass = $('#repeat').val()
  });

  app.Book.create(newBook);

  window.location = '../';
});