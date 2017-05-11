$(".button-collapse").sideNav();

$(document).ready(function () {

  $('#we-know').scrollfire({

    // Offsets
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,

    // Fires once when element completely comes into view from the top
    onBottomVisible: function (elm) {
      $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
            duration: 7000,
            easing: 'swing',
            step: function (now) {
              $(this).text('+' + Math.ceil(now));
            }
          });
      });
      console.log("Fire fire");
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
