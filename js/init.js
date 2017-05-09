$(".button-collapse").sideNav();

$(document).ready(function () {

$('#fact-row').scrollfire({

    // Offsets
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,

    // Fires once when element completely comes into view from the top
    onTopVisible: function( elm ) {
        $('.count').each(function () {
          $(this).prop('Counter',0).animate({
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

  $('.modal').modal();

  //    $('.scrollspy').scrollSpy();

  //  var options = [ 
  //    {selector: '#fact-row', offset: 50, callback: function(el){
  //       console.log("Fire fire fire fire");

  //       $('.count').each(function () {
  //         $(this).prop('Counter',0).animate({
  //             Counter: $(this).text()
  //         }, {
  //             duration: 10000,
  //             easing: 'swing',
  //             step: function (now) {
  //                 $(this).text('+' + Math.ceil(now));
  //             }
  //         });
  //     });
  //   } } ]; 
  //   console.log("Fire fire");
  // Materialize.scrollFire(options); 

});


var figure = $("#we2").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}