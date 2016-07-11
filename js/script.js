

$(document).ready( function() {

/*var position = $("#navbar").offset().top;

function stickyHeader() {
  if (position < $(document).scrollTop()) {
    $("#navbar").addClass("sticky");
  } else {
    $("#navbar").removeClass("sticky");
  }
}

$(window).scroll(function() {
  stickyHeader();
});*/




$("a[href^=#]").click(function(e){
    e.preventDefault();


      
    var dest = $(this).attr('href');

    if(dest === "#totop"){
        $('body').scrollTop(0);
    }

    console.log(dest); 
    
    $('html,body').animate({ 
        scrollTop: $(dest).offset().top 
      }, 'slow'); 
});



  $(".hoverLand").hide();
  $(".hoverBlack").hide();
  $(".hoverList").hide();
  $(".hoverMatch").hide();
  $(".hoverTeam").hide();
  $(".links").hide();



    $( "#team" ).hover(
  function() {
    $( ".hoverTeam" ).show();
  }, function() {
    $(".hoverTeam").hide();
  })

    $( "#blackjack" ).hover(
  function() {
    $( ".hoverBlack" ).show();
  }, function() {
    $(".hoverBlack").hide();
  })

    $( "#match" ).hover(
  function() {
    $( ".hoverMatch" ).show();
  }, function() {
    $(".hoverMatch").hide();
  })

    $( "#list" ).hover(
  function() {
    $( ".hoverList" ).show();
  }, function() {
    $(".hoverList").hide();
  })

    $( "#landscape" ).hover(
  function() {
    $( ".hoverLand" ).show();
  }, function() {
    $(".hoverLand").hide();
  })




$(".social").hover(function() {
     $(this).find(".links").show();
   }, function() {
     $(this).find(".links").hide();
   })

});



 /*$(".social").hover(function() {
     $(".links").show();
   }, function() {
     $(".links").hide();
   })*/





