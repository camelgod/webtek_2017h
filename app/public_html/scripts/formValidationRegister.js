/*
FILE NAME: formValidationRegister.js
WRITTEN BY: Edvard Nordstrøm Ødegaard, Simen Olavesen
WHEN: November 2017
PURPOSE: Form validation for customer registration
*/

window.addEventListener('load', function() {
	form = document.getElementById('registreringsskjema');

	/* For cart.html, should split these in two files seperate */
	input_po = document.getElementById('postnummer');
	input_po.addEventListener('blur', function() {
		console.log("postnr unfocused");
		validate_postnummer(input_po);
	});
	input_email = document.getElementById('email');
	input_email.addEventListener('blur', function() {
		validate_email(input_email);
	});
	input_tlf = document.getElementById('tlf');
	input_tlf.addEventListener('blur', function() {
		validate_tlf(input_tlf);
	});

	submit_button = document.getElementById('submit_button');
	submit_button.addEventListener('click', function() {
		submit('register', form);
	});
});
