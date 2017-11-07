(function($) {
  "use strict"; // Start of use strict
  //Use strict enforces to write secure javascript code. For instance, variables can't be used without prior definition

  // Show the navbar when the page is scrolled up
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#polpoNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#polpoNav').hasClass('is-fixed')) {
            $('#polpoNav').addClass('is-visible');
          } else {
            $('#polpoNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#polpoNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#polpoNav').hasClass('is-fixed')) $('#polpoNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict
