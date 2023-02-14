$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    if ($('body').hasClass('split')) {
      $('body').addClass('split-loaded');
    };
    if ($('body').hasClass('fullscreen')) {
      $('body').addClass('fullscreen-loaded');
    };
  },1200);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  var fullpageNormalScroll = $('#fullpage-scroll'),
      fullpage             = $('#fullpage');

      if (fullpage.length) {
        fullpage.fullpage({
          sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          menu: '#menu',
          scrollingSpeed: 1000,
          responsiveWidth: 1200,
          navigation: true,
          loopBottom: true,
      		verticalCentered: false
        });
      };

      if (fullpageNormalScroll.length) {
        fullpageNormalScroll.fullpage({
          sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          menu: '#menu',
          responsiveWidth: 1183,
          navigation: false,
          autoScrolling: false,
          fitToSection: false,
    		  verticalCentered: false
        });
      };



});
