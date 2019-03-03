$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();


});

 $('#work').on('click',function(e) {

  	// console.log("ok");
  	
  	e.preventDefault(); 	
    $('.page2').removeClass('hide');
  	$('.page1').addClass('hide');
  	$('.page3').addClass('hide');

    $('#page2').addClass('active');
    $('#page1').removeClass('active');
    $('#page3').removeClass('active');

  });

  $('#home').on('click',function(e) {

  	// console.log("ok");
  	
  	e.preventDefault();
  	$('.page1').removeClass('hide');
  	$('.page2').addClass('hide');
  	$('.page3').addClass('hide');

     $('#page1').addClass('active');
    $('#page2').removeClass('active');
    $('#page3').removeClass('active');

  });

  $('#about').on('click',function(e) {

  	// console.log("ok");
  	
  	e.preventDefault();
  	$('.page3').removeClass('hide');
  	$('.page1').addClass('hide');
  	$('.page2').addClass('hide');

     $('#page3').addClass('active');
    $('#page1').removeClass('active');
    $('#page2').removeClass('active');

  });

  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll>$('.page2').offset().top+180){
      $('.img').addClass('bounceIn');
    }

    if(wScroll>$('.page2').offset().top+610){
      $('.img2').addClass('bounceIn');
    }
  });