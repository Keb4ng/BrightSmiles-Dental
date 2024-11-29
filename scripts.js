$(document).ready(function () {
  $(window).scroll(() => {
    var scroll = $(window).scrollTop();
    var navHeight = $(".header-wrapper").height();

    if (scroll > navHeight) {
      $(".header-wrapper").addClass("fixed-header");
    } else {
      $(".header-wrapper").removeClass("fixed-header");
    }
  });
});
