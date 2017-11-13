/* Checks validity of email parameter */

let check_email = function(email) {
	var ret = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return ret.test(email);
}

var valid = [0, 0, 0];

let validate_email = function(field) {
	var email = field.value;
	var temp = window.getComputedStyle(field, null).border;
	if(check_email(email) == false) {
		field.style.border = "1px solid #d66";
		valid[0] = 0;
	}
	else {
		field.style.border = temp;
		valid[0] = 1;
	}
}

let validate_tlf = function(field) {
	var tlf = field.value;
	var temp = window.getComputedStyle(field, null).border;
	if(tlf.toString().length != 8) {
		field.style.border = "1px solid #d66";
		valid[1] = 0;
	}
	else {
		field.style.border = temp;
		valid[1] = 1;
	}
}

let validate_postnummer = function(field) {
	var postnummer = field.value;
	var temp = window.getComputedStyle(field, null).border;
	if(postnummer.toString().length != 4) {
		field.style.border = "1px solid #d66";
		valid[2] = 0;
	}
	else {
		field.style.border = temp;
		valid[2] = 1;
	}
}
/* Checks if email, tlf or postnummer is still invalid when trying to submit */
let submit = function(type, form) {
	var error = "Ugyldige felter: ";
	var stop = 0;

	// Check array for invalid inputs (email, tlf and postnummer)
	if(valid[0] == 0) {
		error += "Email, ";
		stop = 1;
	}
	if(valid[1] == 0) {
		error += "Tlf, ";
		stop = 1;
	}
	if(type != "contact") {
		if(valid[2] == 0) {
			error += "Postnummer, ";
			stop = 1;
		}
	};

	// if any of the three checked input fields in invalid, stop the form submission
	if(stop == 1) {
		alert(error);
	}
	else {
		// check if any fields are empty
		var emptyfields = 0;
		if(type == "register") {
			var fornavn = form['fornavn'].value;
			var etternavn = form['etternavn'].value;
			var adresse = form['adresse'].value;
			if(fornavn == "" || etternavn == "" || adresse == "") {
				emptyfields = 1;
			}
			if(emptyfields != 1) {
				form.submit();
			}
		} else if(type == 'contact') {
			var navn = form['navn'].value;
			var tlf = form['tlf'].value;
			var email = form['email'].value;
			if(navn == "" || tlf == "" || email == "") {
				emptyfields = 1;
			}
			if(emptyfields != 1) {
				form.submit();
			}
		} else if(type == "cart") {
			var fornavn = form['fornavn'].value;
			var etternavn = form['etternavn'].value;
			var adresse = form['adresse'].value;
			if(fornavn == "" || etternavn == "" || adresse == "") {
				emptyfields = 1;
			}
			if(emptyfields != 1) {
				form.submit();
			}
		} else {
			alert("Kan ikke registrere - tomme felter i skjema");
		}
	}
}
