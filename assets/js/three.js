(function ($) {
  $(document).ready(function() {
    $('.fliplink').on('click', function (evt) {
      evt.preventDefault();
      $(this).parents('article:first').addClass('flip');
    });
  });
})(jQuery);
