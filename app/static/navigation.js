window.onload = function() {
	var button = document.getElementById("toggleNav");
	var navbar = document.getElementById("navbar-dropdown");
	var opened = false;

	button.addEventListener('click', function() {
		if(opened == false) {
			navbar.className = "navbar-collapse";
			button.className = "icon icon-open";
			opened = true;
		} else {
			navbar.className = "navbar-collapse navbar-hide";
			button.className = "icon icon-close";
			opened = false;
		};
	});
}
