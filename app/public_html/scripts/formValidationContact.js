/*
FILE NAME: formValidationContact.js
WRITTEN BY: Edvard Nordstrøm Ødegaard, Simen Olavesen
WHEN: November 2017
PURPOSE: Form validation for contact-us
*/

/* For contact form */
window.addEventListener('load', function() {
	form = document.getElementById('kontaktskjema');
	console.log(form);
	

	tlf_contact = document.getElementById('tlf_contact');
	tlf_contact.addEventListener('blur', function() {
		validate_tlf(tlf_contact);
	});

	email_contact = document.getElementById('email_contact');
	email_contact.addEventListener('blur', function() {
		validate_email(email_contact);
	});
	submit_contact = document.getElementById('submit_contact');
	submit_contact.addEventListener('click', function() {
		submit('contact', form);
	});
});
