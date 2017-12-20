$(document).ready(function(){
  let isShown = false;
  let menu = $('.mobile-navbar-menu');
  let icon = $('.enable-nav').children('i');
  $('.enable-nav').on('click', function(){
    isShown = !isShown;
    if(isShown){
      menu.removeClass('animated fadeOutLeft');
      menu.css('display', 'block');
      menu.addClass('animated fadeInLeft');
      icon.addClass('animated rotateIn');
      icon.text('close');
    }
    if(!isShown){
      menu.removeClass('animated fadeInLeft');
      menu.addClass('animated fadeOutLeft');
      icon.addClass('animated rotateIn');
      icon.text('menu');
    }
  });
  menu.on('animationend', function(){
    if(!isShown){
      menu.css('display', 'none');
    }
    icon.removeClass('animated rotateIn');
  });
  $('nav').css('z-index', 9999);
  $('div.dropdown label').append('<i style="padding-right:10%; position:relative;  line-height:1.3rem;" class="material-icons right">keyboard_arrow_down</i>');
  var num = 0;
  $('div.dropdown').each(function(){
    num++;
    $(this).attr('id', 'dropdown-'+num);
  });
  $('div.dropdown').hover(function(){
    $('#'+$(this).attr('id')).children('ul.dropdown-content').css('display', 'block');
  },function(){
    $('#'+$(this).attr('id')).children('ul.dropdown-content').css('display', 'none');
  });
});
