const hamburger_menu_close = document.querySelector('.fa-bars');
const hamburger_menu_hide = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');

hamburger_menu_close.addEventListener('click',function(){

  hamburger_menu_hide.classList.add('active');

});

close.addEventListener('click',function(){

  hamburger_menu_hide.classList.remove('active');

});