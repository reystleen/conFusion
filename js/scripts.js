$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1800 } );
    $("#carousel-button").click(function(){
       if ($("#carousel-button").children("span").hasClass('fa-pause')) {
           $("#mycarousel").carousel('pause');
           $("#carousel-button").children("span").removeClass('fa-pause');
           $("#carousel-button").children("span").addClass('fa-play');
       }
       else if ($("#carousel-button").children("span").hasClass('fa-play')){
           $("#mycarousel").carousel('cycle');
           $("#carousel-button").children("span").removeClass('fa-play');
           $("#carousel-button").children("span").addClass('fa-pause');
       }
    });

    // Toggle Login modal
    $("#loginBtn").click(function(){
       $("#loginModal").modal('toggle');
    });

    // Toggle Reserve modal
    $("#reserveBtn").click(function(){
       $("#reserveModal").modal('toggle');
    });

});
