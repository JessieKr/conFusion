$(document).ready(function() {

    $('#mycarousel').carousel({ interval: 2000 });

    $('#carouselButton').click(function() {
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
      } else {
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
      }
    });

    $('#loginModalToggle').click(function() {
      $('#loginModal').modal('toggle');
    })

    $('#reserveModalToggle').click(function() {
      $('#reserveModal').modal('toggle');
    })
  });