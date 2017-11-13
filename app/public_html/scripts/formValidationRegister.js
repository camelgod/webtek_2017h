
// -- FORM VALIDATION REGISTRER.HTML --

var registrer_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
let submit_register = function() {
	var error = "Ugyldige felter: ";
	var stop = 0;

	// Check array for invalid inputs (email, tlf and postnummer)
	if(registrer_valid[0] == 0) {
		error += "Email, ";
		stop = 1;
	}
	if(registrer_valid[1] == 0) {
		error += "Tlf, ";
		stop = 1;
	}
	if(registrer_valid[2] == 0) {
		error += "Postnummer, ";
		stop = 1;
	}

	// if any of the three checked input fields in invalid, stop the form submission
	if(stop == 1) {
		alert(error);
	}
	else {
		// check if any fields are empty
		var emptyfields = 0;
		var fornavn = document.forms['registreringsskjema']['fornavn'].value;
		var etternavn = document.forms['registreringsskjema']['etternavn'].value;
		var adresse = document.forms['registreringsskjema']['adresse'].value;
		if(fornavn == "" || etternavn == "" || adresse == "") {
			emptyfields = 1;
		}

		if(emptyfields != 1) {
			document.forms['registreringsskjema'].submit();
		}
		else {
			alert("Kan ikke registrere - tomme felter i skjema");
		}
	}
}


/* Checks validity of email input and displays error message if not valid*/
let validate_email_register = function() {
	var email = document.forms['registreringsskjema']['email'].value;
	var temp = window.getComputedStyle(document.forms['registreringsskjema']['email'], null).border;
	if(validate_email(email) == false) {
		document.forms['registreringsskjema']['email'].style.border = "1px solid #d66";
		registrer_valid[0] = 0;
	}
	else {
		document.forms['registreringsskjema']['email'].style.border = temp;
		registrer_valid[0] = 1;
	}
}

/* Checks validity of tlf input and displays error message if not valid*/
let validate_tlf_register = function() {
	var tlf = document.forms['registreringsskjema']['tlf'].value;
	var temp = window.getComputedStyle(document.forms['registreringsskjema']['email'], null).border;
	if(tlf.toString().length != 8) {
		document.forms['registreringsskjema']['tlf'].style.border = "1px solid #d66";
		registrer_valid[1] = 0;
	}
	else {
		document.forms['registreringsskjema']['tlf'].style.border = temp;
		registrer_valid[1] = 1;
	}
}

/* Checks validity of postnummer input and displays error message if not valid*/
let validate_postnummer_register = function() {
	var postnummer = document.forms['registreringsskjema']['postnummer'].value;
	var temp = window.getComputedStyle(document.forms['registreringsskjema']['postnummer'], null).border;
	if(postnummer.toString().length != 4) {
		document.forms['registreringsskjema']['postnummer'].style.border = "1px solid #d66";
		registrer_valid[2] = 0;
	}
	else {
		document.forms['registreringsskjema']['postnummer'].style.border = temp;
		registrer_valid[2] = 1;
	}
}


