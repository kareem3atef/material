$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 2 ,
        margin : 40 ,
        nav : true ,
        loop: true ,
        dots : false , 
        navText : [  '<h1 class="text-danger">Next</h1>' , '<h1 class="text-danger">Previous </h1>'  ] ,
        autoplay: true ,
        autoplayTimeout : 1000 ,
        autoplayHoverPause : true ,
        responsive : {
            // breakpoint from 0 up
            0 : {
               items : 1,
               autoplay:false
            },
            // breakpoint from 480 up
            480 : {
               items: 3
                // option2 : value,
                // ...
            },
            // breakpoint from 768 up
            768 : {
                // option1 : value,
                // option2 : value,
                // ...
            }
        }
    });
  });


  var fName = 'nouran'