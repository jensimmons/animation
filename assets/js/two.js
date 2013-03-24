(function ($) {
  $(document).ready(function () {

    // Flip the cards over
    // --------------------------------------------------------------------
    // This adds a 'flip' class to things marked with 'hover' when someone is hovering.
    // This javascript was snagged from http://css3playground.com/flip-card.php
    // Thanks Chris Ruppel, http://chrisruppel.com

    $('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

    //show
    $('div.view-people ul').show();
  });
})(jQuery);
