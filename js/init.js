$(".button-collapse").sideNav();

$(document).ready(function () {

  window.fire = 0;

  $('#fact-mask').scrollfire({

    // Offsets
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,

    // Fires once when element completely comes into view from the top
    onBottomIn: function (elm) {
      if(window.fire == 0){
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'easeInCubic',
            step: function (now) {
              $(this).text('+' + Math.ceil(now));
            }
          });
      });
      window.fire = 1;
      }
    },

  });

  $('.text-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.icon-carousel'
  });
  $('.icon-carousel').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 5,
    asNavFor: '.text-carousel',
    adaptiveHeight: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          arrows: false,
        }
      }
    ]
  });

  $('.discovery-slider').slick({
    arrows: false,
    draggable: false,
    fade: true,
    swipe:false,
    touchMove: false,
  });

});


$("#we1").hover(function () {
  $(this).addClass("we-select");;

}, function () {
  $(this).removeClass("we-select");;

});

$("#we2").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
  $('video', this).get(0).play();
}

function hideVideo(e) {
  $('video', this).get(0).pause();
}

$(".discovery-step-div").click(function () {
  if (!($(this).hasClass("selected"))) {
    $(".discovery-step-div").removeClass("selected");
    $(this).addClass("selected");
    $(".discovery-step-div").find('i').text("adjust");
    $(this).find('i').text("keyboard_arrow_down");

    $('.discovery-slider').slick('slickGoTo', $(this).attr("num") - 1);

    switch ( $(this).attr("num") ) {
      case "1":
        $(".discovery-line").css("background-color", "#8571EB");
        break;
      case "2":
        $(".discovery-line").css("background-color", "#F94B71");
        break;
      case "3":
        $(".discovery-line").css("background-color", "#39F3BF");
        break;
      case "4":
        $(".discovery-line").css("background-color", "#45BBF1");
        break;
    }
  }
});
