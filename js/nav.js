// navigation menu animation
var menu_icon = document.querySelector('#menu-icon');
var drawer = document.querySelector('.nav__row');

menu_icon.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
})