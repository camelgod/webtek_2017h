/* For contact form */
window.addEventListener('load', function() {
	tlf_contact = document.getElementById('tlf_contact');
	tlf_contact.addEventListener('blur', function() {
		validate_tlf_kontakt();
	});

	email_contact = document.getElementById('email_contact');
	email_contact.addEventListener('blur', function() {
		validate_email_kontakt();
	});
	submit_contact = document.getElementById('submit_contact');
	submit_contact.addEventListener('click', function() {
		submit_kontakt();
	});
});

// -- FORM VALIDATION KONTAKT.HTML --

var kontakt_valid = [0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
let submit_kontakt = function() {
	var error = "Ugyldige felter: ";
	var stop = 0;

	// Check array for invalid inputs (email, tlf and postnummer)
	if(kontakt_valid[0] == 0) {
		error += "Email, ";
		stop = 1;
	}
	if(kontakt_valid[1] == 0) {
		error += "Tlf, ";
		stop = 1;
	}

	// if any of the three checked input fields in invalid, stop the form submission
	if(stop == 1) {
		alert(error);
	}
	else {
		// check if any fields are empty
		var emptyfields = 0;
		var navn = document.forms['kontaktskjema']['navn'].value;
		var message = document.forms['kontaktskjema']['message'].value;
		if(navn == "" || message == " " || message == "") {
			emptyfields = 1;
		}

		if(emptyfields != 1) {
			document.forms['kontaktskjema'].submit();
		}
		else {
			alert("Kan ikke sende - tomme felter i skjema");
		}
	}
}

let validate_email_kontakt = function() {
	var email = document.forms['kontaktskjema']['email'].value;
	console.log('email');
	var temp = window.getComputedStyle(document.forms['kontaktskjema']['email'], null).border;
	if(validate_email(email) == false) {
		document.forms['kontaktskjema']['email'].style.border = "1px solid #d66";
		kontakt_valid[0] = 0;
	}
	else {
		document.forms['kontaktskjema']['email'].style.border = temp;
		kontakt_valid[0] = 1;
	}
}

let validate_tlf_kontakt = function() {
	var tlf = document.forms['kontaktskjema']['tlf'].value;
	var temp = window.getComputedStyle(document.forms['kontaktskjema']['tlf'], null).border;
	if(tlf.toString().length != 8) {
		document.forms['kontaktskjema']['tlf'].style.border = "1px solid #d66";
		kontakt_valid[1] = 0;
	}
	else {
		document.forms['kontaktskjema']['tlf'].style.border = temp;
		kontakt_valid[1] = 1;
	}
}

