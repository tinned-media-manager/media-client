'use strict';

var app = app || {};

(module => {
  const signUpView = {};
  signUpView.init = function () {
    $('input').val('');
    $('#sign-up-form').show();
    $('#sign-up-form').on('submit', event => {
      event.preventDefault();
      var newUser = new app.Movie({
        firstName: $('#name').val(),
        lastName: $('#last-name').val(),
        userEmail: $('#email').val(),
        apiKey: $('#api').val(),
        password: $('#password').val(),
      })
      app.Movie.createUser(newUser);
    });
  };
  module.signUpView = signUpView;
})(app);


