var $scrollDown = $("#js-home__content__scroll--down");

//Default active on home
$('#js-mast-head__navbar__list__link--1').addClass("active");

/*
Smooth scrolling
*/
$("#js-mast-head__navbar__list__link--1").click(function() {
  $('html, body').animate({
    scrollTop: $("#js-content__about").offset().top - 65
  }, 1000);
  return false;
});

$("#js-mast-head__navbar__list__link--2").click(function() {
  $('html, body').animate({
    scrollTop: $("#js-content__portfolio").offset().top - 100
  }, 1000);
  return false;
});

$("#js-mast-head__navbar__list__link--3").click(function() {
  $('html, body').animate({
    scrollTop: $("#js-content__testimonials").offset().top - 100
  }, 1000);
  return false;
});

$("#js-mast-head__navbar__list__link--4").click(function() {
  $(this).addClass("active");
  $('html, body').animate({
    scrollTop: $("#js-content__contact").offset().top - 100
  }, 1000);
  return false;
});

$scrollDown.velocity({
      translateY: "10px"
  }, {
      loop: false
  }).velocity("reverse");

$scrollDown.on("click", function(){
  $("#js-content__about").velocity("scroll", {
      duration: 2000,
      easing: "easeInBack"
  });
});

$("#js-toTop").click(function() {
     $('html, body').animate({
         scrollTop: $("#1").offset().top-1000
     }, 1000);
  return false;
 });
// $("#toTop").click(function() {
//   $("#js-content__about").velocity("scroll", {
//       duration: 2000,
//       easing: "easeInBack"
//   });
// });
/*$('#2').waypoint(function(event, direction) {

  $(".nav-container ul li").children().removeClass("active");
  $("#s2").addClass("active");
  
  if (direction === 'down') {
    offset = 90;
  } 
  else {
    offset = 20;
  }
});*/

/*
Using jquery waypoints to change active on scroll
*/
$('#js-content__portfolio').waypoint(function() {

  $(".js-mast-head__navbar__list__wrapper ul li").children().removeClass("active");
  $("#js-mast-head__navbar__list__link--2").addClass("active");

}, {
  offset: 101
});

$('#js-content__testimonials').waypoint(function() {
  $(".js-mast-head__navbar__list__wrapper ul li").children().removeClass("active");
  $("#js-mast-head__navbar__list__link--3").addClass("active");
}, {
  offset: 101
});

$('#js-content__contact').waypoint(function() {
  $(".js-mast-head__navbar__list__wrapper ul li").children().removeClass("active");
  $("#js-mast-head__navbar__list__link--4").addClass("active");
}, {
  offset: 101
});

$('#js-content__about').waypoint(function() {
  $(".js-mast-head__navbar__list__wrapper ul li").children().removeClass("active");
  $("#js-mast-head__navbar__list__link--1").addClass("active");
}, {
  offset: 0
});

$('#js-content__portfolio').waypoint(function() {
  $(".to-top").addClass("visible");
}, {
  offset: 100
});

$('#js-content__about').waypoint(function(event, direction) {
  $(".to-top").removeClass("visible");
}, {
  offset: 30
});