$(".button-collapse").sideNav();

var options = [{
  selector: '.count', offset: 0, callback: function (el) {
    Materialize.toast("This is our ScrollFire Demo!", 1500);
  }
}, {
  selector: '#fact-row', offset: 0, callback: function (el) {
    Materialize.toast("Please continue scrolling!", 1500);
  }
}];

Materialize.scrollFire(options);

$(document).ready(function () {

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



// Tv off 
