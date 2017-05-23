$(document).ready(function() {

// Start coding here



$('.rollover').mouseenter(function() {
  $('.sidebarimage').removeClass('startimage');
  $('.sidebarimage').addClass('image1');
});


  $('.rollover').mouseleave(function() {
    $('.sidebarimage').addClass('startimage');
    $('.sidebarimage').removeClass('image1');
  });

  $('.records').mouseenter(function() {
    $('.sidebarimage').removeClass('startimage');
    $('.sidebarimage').addClass('image3');
  });


    $('.records').mouseleave(function() {
      $('.sidebarimage').addClass('startimage');
      $('.sidebarimage').removeClass('image3');
    });


 });
