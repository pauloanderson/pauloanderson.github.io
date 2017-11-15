$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.parallax').css({
    'transform' : 'translate(0px, -'+ wScroll /60 +'% )'
  });

  $('.back-bird').css({
    'transform' : 'translate(0px,'+ wScroll /4 +'% )'
  });

  $('.fore-bird').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'% )'
  });

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  //if (wScroll >= 100) {$(".logo_one").addClass("logo");} else {$(".logo_one").removeClass("logo");}

  if (wScroll >= 200) {$('.logo_icon').attr('src', 'img/logo_thick_version_dark_with_square.png');}
     else {$('.logo_icon').attr('src', 'img/logo_thick_version_with_shadow.png');}

  if (wScroll >= 200) {$(".navbar-default").addClass("bar-nav nav li a");} else{$(".navbar-default").removeClass("bar-nav nav li a");}

  if (wScroll >= 200) {$(".nav li a, .navbar-default .navbar-brand").addClass("shadow");} else{$(".nav li a, .navbar-default .navbar-brand").removeClass("shadow");}

  if (wScroll >= 200) {$(".logo_icon").addClass("icon_logo");} else{$(".logo_icon").removeClass("icon_logo");}
});
$('.carousel').carousel({
    pause: "false"
});

