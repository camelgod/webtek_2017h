window.addEventListener('load', function() {
	/* For cart.html, should split these in two files seperate */
	input_po = document.getElementById('postnummer');
	input_po.addEventListener('blur', function() {
		console.log("postnr unfocused");
		validate_postnummer_cart();
	});
	input_email = document.getElementById('email');
	input_email.addEventListener('blur', function() {
		validate_email_cart();
	});
	input_tlf = document.getElementById('tlf');
	input_tlf.addEventListener('blur', function() {
		validate_tlf_cart();
	});

	button3 = document.getElementById('3from2');
	button3.addEventListener('click', function() {
		validate_cart();
	});
});



// -- FORM VALIDATION CART.HTML --

var cart_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
let validate_cart = function(){
	var error = "Ugyldige felter: ";
	var stop = 0;

	// Check array for invalid inputs (email, tlf and postnummer)
	if(cart_valid[0] == 0) {
		error += "Email, ";
		stop = 1;
	}
	if(cart_valid[1] == 0) {
		error += "Tlf, ";
		stop = 1;
	}
	if(cart_valid[2] == 0) {
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
		var fornavn = document.forms['leveringsskjema']['fornavn'].value;
		var etternavn = document.forms['leveringsskjema']['etternavn'].value;
		var adresse = document.forms['leveringsskjema']['adresse'].value;
		if(fornavn == "" || etternavn == "" || adresse == "") {
			emptyfields = 1;
		}

		if(emptyfields != 1) {
			validated_info = 1;
			change_step(3);
		}
		else {
			alert("Kan ikke gå til neste steg - tomme felter i skjema");
		}
	}
}

let validate_email_cart = function() {
	var email = document.forms['leveringsskjema']['email'].value;
	console.log(email);
	var temp = window.getComputedStyle(document.forms['leveringsskjema']['email'], null).border;
	if(validate_email(email) == false) {
		document.forms['leveringsskjema']['email'].style.border = "1px solid #d66";
		cart_valid[0] = 0;
	}
	else {
		document.forms['leveringsskjema']['email'].style.border = temp;
		cart_valid[0] = 1;
	}
}

let validate_tlf_cart = function() {
	var form = document.forms['leveringsskjema'];
	var tlf = form['tlf'].value;
	var temp = window.getComputedStyle(document.forms['leveringsskjema']['tlf'], null).border;
	if(tlf.toString().length != 8) {
		document.forms['leveringsskjema']['tlf'].style.border = "1px solid #d66";
		cart_valid[1] = 0;
	}
	else {
		document.forms['leveringsskjema']['tlf'].style.border = temp;
		cart_valid[1] = 1;
	}
}

let validate_postnummer_cart = function() {
	var postnummer = document.forms['leveringsskjema']['postnummer'].value;
	var temp = window.getComputedStyle(document.forms['leveringsskjema']['postnummer'], null).border;
	if(postnummer.toString().length != 4) {
		document.forms['leveringsskjema']['postnummer'].style.border = "1px solid #d66";
		cart_valid[2] = 0;
	}
	else {
		document.forms['leveringsskjema']['postnummer'].style.border = temp;
		cart_valid[2] = 1;
	}
}
