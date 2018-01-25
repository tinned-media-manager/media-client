/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

  skel
    .breakpoints({
      xlarge: '(max-width: 1680px)',
      large: '(max-width: 1280px)',
      medium: '(max-width: 980px)',
      small: '(max-width: 736px)',
      xsmall: '(max-width: 480px)'
    });

  $(function () {

    var $window = $(window),
      $body = $('body'),
      $wrapper = $('#page-wrapper'),
      $banner = $('#banner'),
      $header = $('#header');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function () {
      window.setTimeout(function () {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Mobile?
    if (skel.vars.mobile)
      $body.addClass('is-mobile');
    else
      skel
        .on('-medium !medium', function () {
          $body.removeClass('is-mobile');
        })
        .on('+medium', function () {
          $body.addClass('is-mobile');
        });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', function () {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Scrolly.
    $('.scrolly')
      .scrolly({
        speed: 1500,
        offset: $header.outerHeight()
      });

    // Menu.
    $('#menu')
      .append('<a href="#menu" class="close"></a>')
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $body,
        visibleClass: 'is-menu-visible'
      });
    $('.search-btn').click(function (e) {
      $('.page').hide();
      e.preventDefault();
      $('.search-results').remove();
      let titleSearch = $('#main-search').val();
      let urlTitle = titleSearch.split(' ').join('+');
      app.Movie.searchAll(urlTitle);
      page('/')
      $('#search-results').show()
      document.getElementById('one').style.backgroundColor = 'purple';
      a.menueToggle;
      return false;
    }
    );

    //fix this later


    // $('.rec-content').click( function(event) {
    // 	$('.page').hide();
    // 	event.preventDefault();
    // 	page(`/home/details/${$(event.target).data('id')}`)
    // 	$('#media-details').show()
    // 	document.getElementById("one").style.backgroundColor = "purple";
    // 	a.menueToggle;
    // 	return false;


    $('#main-search').keyup(event => {
      event.preventDefault()
      if (event.keyCode === 13) {
        // event.preventDefault()
        $('.search-btn').click();
      }
    });

    $('#sighnup').click(function (e) {
      $('.page').hide();
      page('/home/sighnup')
      app.signUpView.init();
      document.getElementById('one').style.backgroundColor = 'red';
      a.menueToggle;
      return false;
    }
    );
    $('#login').click(function (e) {
      $('.page').hide();
      page('/home/login')
      document.getElementById('one').style.backgroundColor = 'blue';
      a.menueToggle;
      return false;
    }
    );
    $('#about-us').click(function (e) {
      $('.page').hide();
      page('/home/aboutus')
      document.getElementById('one').style.backgroundColor = 'green';
      a.menueToggle;
      return false;
    }
    );

    // Header.
    if (skel.vars.IEVersion < 9)
      $header.removeClass('alt');

    if ($banner.length > 0
			&& $header.hasClass('alt')) {

      $window.on('resize', function () { $window.trigger('scroll'); });

      $banner.scrollex({
        bottom: $header.outerHeight() + 1,
        terminate: function () { $header.removeClass('alt'); },
        enter: function () { $header.addClass('alt'); },
        leave: function () { $header.removeClass('alt'); }
      });

    }

  });

})(jQuery);
