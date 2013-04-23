(function ($) {
  $(document).ready(function() {
  
    $('.fliplink').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('article:first').addClass('flip');
    });

    $('.fliplinkone').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').addClass('flipone');
    });

    $('.fliplinktwo').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass('flipone').addClass('fliptwo');
    });

    $('.fliplinkthree').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass('fliptwo').addClass('flipthree');
    });

    $('.fliplinkfour').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('body').removeClass('flipthree').addClass('flipfour');
    });
    
  });
})(jQuery);
