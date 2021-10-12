var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#about_block_header_nav_sidebar_body');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#about_block_header_nav_hamburger_overlay');
var activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e) {
	e.preventDefault();
    this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
	    if (e.repeat === false && e.which === 27)
            this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();
this.parentNode.classList.remove(activatedClass);
});