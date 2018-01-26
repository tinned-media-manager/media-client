'use strict';

var app = app || {};

(module => {

  const signUpView = {};
  signUpView.init = function () {
    $('.page').hide();
    $('#one').css('backgroundImage', 'url()');
    $('input').val('');
    $('#submit').one('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      let newUser = {};
      newUser.firstName = $('#name').val();
      newUser.lastName = $('#last-name').val();
      newUser.userEmail = $('#email').val();
      newUser.apiKey = $('#api').val();
      newUser.password = $('#password').val();

      console.log(newUser);
      app.Movie.createUser(newUser);
      // window.location = '../';
    });
  };

  module.signUpView = signUpView;
})(app);