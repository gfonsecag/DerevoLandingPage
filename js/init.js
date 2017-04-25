
  // Initialize collapse button

 $(document).ready(function(){
    $('.carousel').carousel({});
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

  var options = [ {
    selector: '#weknow-row', offset: 50, callback: function(el) { 
      Materialize.toast("This is our ScrollFire Demo!", 1500 ); } 
    }, {selector: '#weknow-row', offset: 205, callback: function(el) { 
      Materialize.toast("Please continue scrolling!", 1500 ); } 
    } ];
       
    Materialize.scrollFire(options); 


  $(".button-collapse").sideNav();
