

 var s = skrollr.init();


setTimeout(function(){  

$('html, body').animate({

scrollTop: $("#slide-2").offset().top  

},1000);

 }, 10000);  

/*
setTimeout(function(){  

$(".wings").remove(); 


 }, 17000);  

*/

/*
$(document).keydown(function(e){
    switch (e.which){

    case 38:    //up arrow key

        setTimeout(function(){  
$(".root").ready(function(){
          $(".right-leg").addClass("right-move");
          $(".left-leg").addClass("left-move");
});

    setTimeout(function(){  
$(".root").ready(function(){
          $(".right-leg").removeClass("right-move");
          $(".left-leg").removeClass("left-move");
});
            }, 200); 
            }, 200); 
        break;
    case 40:    //bottom arrow key
        
        setTimeout(function(){  
$(".root").ready(function(){
          $(".right-leg").addClass("right-move");
          $(".left-leg").addClass("left-move");
});

    setTimeout(function(){  
$(".root").ready(function(){
          $(".right-leg").removeClass("right-move");
          $(".left-leg").removeClass("left-move");
});
            }, 200); 
            }, 200); 


        break;
    }
});
*/

/* Move Root on scroll and up/down arrow press*/


$(function() {

$(window).on('wheel keydown', function(e) {

  var delta = e.originalEvent.deltaY;

  if (delta > 0 || e.keyCode == 40) {

   
    $(".left-leg").css("transform", "rotate(40deg)");
    $(".left-foot").css("left", "-2px"); 
    $(".left-foot").css("border-radius", "20% 40% 15% 10%");
    setTimeout(function(){  
    $(".left-leg").css("transform", "rotate(0deg)");
     }, 200); 
    $(".right-leg").css("transform", "rotate(-40deg)");
    $(".right-foot").css("left", "-2px"); 
    $(".right-foot").css("border-radius", "20% 40% 15% 10%");
    setTimeout(function(){  
    $(".right-leg").css("transform", "rotate(0deg)");
     }, 200); 

  } else if (delta <0 || e.keyCode == 38) { 

    $(".left-leg").css("transform", "rotate(40deg)");
     $(".left-foot").css("left", "-7px"); 
    $(".left-foot").css("border-radius", "40% 20% 10% 15%");
    setTimeout(function(){  
    $(".left-leg").css("transform", "rotate(0deg)");
     }, 200); 
    $(".right-leg").css("transform", "rotate(-40deg)");
      $(".right-foot").css("left", "-7px"); 
    $(".right-foot").css("border-radius", "40% 20% 10% 15%");
    setTimeout(function(){  
    $(".right-leg").css("transform", "rotate(0deg)");
     }, 200); 
  }

  else {};

});

});


/* End of Move Root on scroll and up/down arrow press*/




<!--Start of typed.js -->


setTimeout(function(){ 
$(".dialogue-box-root1").css("display", "block");
 }, 20000); 

setTimeout(function(){ 
$(".dialogue-box-root1").css("display", "none");
 }, 30000); 




  $(function(){
      $(".dialogue-box-root1").typed({
        strings: ["<p>What a beautiful day to shoot some bad guys!</p>", "<p>Lorem ipsum</p>"],
        typeSpeed: 0,
        showCursor: false,
        startDelay: 12000,
      });
  });



<!--End of typed.js -->



 /* var targetOffset = $(".fan").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > 2000 ) {   
       */

       $(".fan").click(function(){

$(".dialogue-box-root2").css("display", "block");
$(".dialogue-box-root2").typed({
        strings: ["<p>Hey, kiddo!</p>", "<p>Why are you crying?</p>"],
        typeSpeed: 0,
        showCursor: false,
        startDelay: 1000,
      });

setTimeout(function(){ 
  $(".dialogue-box-root2").css("display", "none");
}, 15000); 

setTimeout(function(){ 
$(".dialogue-box-fan1").css("display", "block");
$(".dialogue-box-fan1").typed({
        strings: ["<p>I am crying because I want a spinoff so bad. I am one of many fans who are fighting like hell.</p>", "<p>We fight to see you and Shaw share the same screen again, but Netflix does not seem to hear us.</p>", "<p>You would not believe the things we do...</p>"],
        typeSpeed: 0,
        showCursor: false,
        startDelay: 1000,
      });
}, 5000); 
   });


$(".shaw").click(function(){

setTimeout(function(){ 
$(".dialogue-box-shaw1").css("display", "block");
$(".dialogue-box-shaw1").typed({
        strings: ["<p>Root...</p>", "<p>I can't believe it's you!</p>", "<p> Of course I am in! I want the spinoff...SPINOFF! SPINOFF!</p>"],
        typeSpeed: 0,
        showCursor: false,
        startDelay: 1000,
      });
}, 500); 


setTimeout(function(){ 
  $(".dialogue-box-shaw1").css("display", "none");
}, 15000); 

  });


/******On page reload, go to the start (script for Chrome) ********/
/*
window.onbeforeunload = function(){
  window.scrollTo(0,0);
}

*/
/******End of script for Chrome ********/


/*copy mute script*/

var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);


 $(".sound").click(function(){
        $("#mute").toggleClass("switch");
    });

/*end copy mute script*/




$(window).scroll(function() {
    if ($(this).scrollTop() >= 1300 && $(this).scrollTop() <=1350 || $(this).scrollTop() >= 6000 && $(this).scrollTop() <= 6200 ) {
       $("#gunsound").trigger('play');
    } 
});


$("#mute").click(function(){
      $("#gunsound").detach();
    });



