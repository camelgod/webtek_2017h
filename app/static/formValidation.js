/* Checks validity of email parameter */
function validate_email(email) {
    var ret = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return ret.test(email);
}


// -- FORM VALIDATION REGISTRER.HTML --

var registrer_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function submit_register() {
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
function validate_email_register() {
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
function validate_tlf_register() {
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
function validate_postnummer_register() {
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


// -- FORM VALIDATION KONTAKT.HTML --

var kontakt_valid = [0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function submit_kontakt() {
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

function validate_email_kontakt() {
    var email = document.forms['kontaktskjema']['email'].value;
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

function validate_tlf_kontakt() {
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


// -- FORM VALIDATION CART.HTML --

var cart_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function validate_cart(){
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

function validate_email_cart() {
    var email = document.forms['leveringsskjema']['email'].value;
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

function validate_tlf_cart() {
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

function validate_postnummer_cart() {
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