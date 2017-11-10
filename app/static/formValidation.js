/* Checks validity of email parameter */
function validate_email(email){
    var ret = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return ret.test(email);
}


// -- FORM VALIDATION REGISTRER.HTML --

var registrer_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function submit_register(){
    var error = "Ugyldige felter: ";
    var stop = 0;

    // Check array for invalid inputs (email, tlf and postnummer)
    if(registrer_valid[0] == 0){
        error += "Email, ";
        stop = 1;
    }
    if (registrer_valid[1] == 0){
        error += "Tlf, ";
        stop = 1;
    }
    if (registrer_valid[2] == 0){
        error += "Postnummer, ";
        stop = 1;
    }

    // if any of the three checked input fields in invalid, stop the form submission
    if (stop == 1){
        alert(error);
    }
    else{
        // check if any fields are empty
        var emptyfields = 0;
        var fornavn = document.forms['registreringsskjema']['fornavn'].value;
        var etternavn = document.forms['registreringsskjema']['etternavn'].value;
        var adresse = document.forms['registreringsskjema']['adresse'].value;
        if(fornavn == "" || etternavn == "" || adresse == ""){
            emptyfields = 1;
        }

        if(emptyfields != 1){
            document.forms['registreringsskjema'].submit();
        }
        else{
            alert("Kan ikke registrere - tomme felter i skjema");
        }
    }
}

/* Checks validity of email input and displays error message if not valid*/
function validate_email_register(){
    var form = document.forms['registreringsskjema'];
    var email_address = form['email'].value;
    var feilmelding = document.getElementById('email_register');
    var temp_tekst = "Email";

    if(validate_email(email_address) == false){
        // Appends error message to email label tag
        feilmelding.innerHTML = temp_tekst + '<span style=\"color:red; font-size:12px\"> ugyldig adresse</span>';
        // sets valid-email to false
        registrer_valid[0] = 0;
        setTimeout(function(){feilmelding.innerHTML = temp_tekst},2000);
    }
    else{
        // sets valid-email to true
        registrer_valid[0] = 1;
    }
}

/* Checks validity of tlf input and displays error message if not valid*/
function validate_tlf_register(){
    var form = document.forms['registreringsskjema'];
    var tlf = form['tlf'].value;
    var feilmelding = document.getElementById('tlf_register');
    var temp_tekst = "Tlf";

    if(tlf.toString().length != 8){
        // Appends error message to tlf label tag
        feilmelding.innerHTML = temp_tekst + '<span style=\"color:red; font-size:12px\"> ugyldig nr</span>';
        // sets valid-tlf to false
        registrer_valid[1] = 0;
        setTimeout(function(){feilmelding.innerHTML = temp_tekst},2000);
    }
    else{
        // sets valid-tlf to true
        registrer_valid[1] = 1;
    }
}

/* Checks validity of postnummer input and displays error message if not valid*/
function validate_postnummer_register(){
    var form = document.forms['registreringsskjema'];
    var tlf = form['postnummer'].value;
    var feilmelding = document.getElementById('postnummer_register');
    // sets valid-postnummer to false every
    var temp_tekst = "Postnummer";

    if(tlf.toString().length != 4){
        // Appends error message to postnummer label tag
        feilmelding.innerHTML = temp_tekst + '<span style=\"color:red; font-size:12px\"> ugyldig postnr</span>';
        // sets valid-tlf to false
        registrer_valid[2] = 0;
        setTimeout(function(){feilmelding.innerHTML = temp_tekst},2000);
    }
    else{
        // sets valid-postnummer to true
        registrer_valid[2] = 1;
    }
}


// -- FORM VALIDATION KONTAKT.HTML --

var kontakt_valid = [0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function submit_kontakt(){
    var error = "Ugyldige felter: ";
    var stop = 0;

    // Check array for invalid inputs (email, tlf and postnummer)
    if(kontakt_valid[0] == 0){
        error += "Email, ";
        stop = 1;
    }
    if (kontakt_valid[1] == 0){
        error += "Tlf, ";
        stop = 1;
    }

    // if any of the three checked input fields in invalid, stop the form submission
    if (stop == 1){
        alert(error);
    }
    else{
        // check if any fields are empty
        var emptyfields = 0;
        var navn = document.forms['kontaktskjema']['navn'].value;
        var message = document.forms['kontaktskjema']['message'].value;
        if(navn == "" || message == " "){
            emptyfields = 1;
        }

        if(emptyfields != 1){
            document.forms['kontaktskjema'].submit();
        }
        else{
            alert("Kan ikke sende - tomme felter i skjema");
        }
    }
}

function validate_email_kontakt() {
    var email = document.forms['kontaktskjema']['email'].value;
    var feilmelding = document.getElementById('invalid_email_kontakt');
    if (validate_email(email) == false) {
        feilmelding.innerHTML = "Ugyldig e-post";
        feilmelding.style.color = "red";
        feilmelding.style.fontSize = "12px";
        feilmelding.style.display = "inline";
        kontakt_valid[0] = 0;
        setTimeout(function(){feilmelding.style.display = "none"},2000);
    }
    else {
        kontakt_valid[0] = 1;
    }
}

function validate_tlf_kontakt() {
    var form = document.forms['kontaktskjema'];
    var tlf = form['tlf'].value;
    var feilmelding = document.getElementById('invalid_tlf_kontakt');
    if (tlf.toString().length != 8) {
        feilmelding.innerHTML = "Ugyldig telefonnummer";
        feilmelding.style.color = "red";
        feilmelding.style.fontSize = "12px";
        feilmelding.style.display = "inline";
        kontakt_valid[1] = 0;
        setTimeout(function(){feilmelding.style.display = "none"},2000);
    }
    else {
        kontakt_valid[1] = 1;
    }
}


// -- FORM VALIDATION CART.HTML --

var cart_valid = [0, 0, 0];

/* Checks if email, tlf or postnummer is still invalid when trying to submit */
function submit_cart(){
    var error = "Ugyldige felter: ";
    var stop = 0;

    // Check array for invalid inputs (email, tlf and postnummer)
    if(cart_valid[0] == 0){
        error += "Email, ";
        stop = 1;
    }
    if (cart_valid[1] == 0){
        error += "Tlf, ";
        stop = 1;
    }
    if (cart_valid[2] == 0){
        error += "Postnummer, ";
        stop = 1;
    }

    // if any of the three checked input fields in invalid, stop the form submission
    if (stop == 1){
        alert(error);
    }
    else{
        // check if any fields are empty
        var emptyfields = 0;
        var fornavn = document.forms['leveringsskjema']['fornavn'].value;
        var etternavn = document.forms['leveringsskjema']['etternavn'].value;
        var adresse = document.forms['leveringsskjema']['adresse'].value;
        if(fornavn == "" || etternavn == "" || adresse == ""){
            emptyfields = 1;
        }

        if(emptyfields != 1){
            document.forms['leveringsskjema'].submit();
        }
        else{
            alert("Kan ikke levere ordre - tomme felter i skjema");
        }
    }
}

function validate_email_cart() {
    var email = document.forms['leveringsskjema']['email'].value;
    var feilmelding = document.getElementById('invalid_email_levering');
    if (validate_email(email) == false) {
        feilmelding.innerHTML = "Ugyldig e-post";
        feilmelding.style.color = "red";
        feilmelding.style.fontSize = "12px";
        feilmelding.style.display = "inline";
        cart_valid[0] = 0;
        setTimeout(function(){feilmelding.style.display = "none"},2000);
    }
    else {
        cart_valid[0] = 1;
    }
}

function validate_tlf_cart() {
    var form = document.forms['leveringsskjema'];
    var tlf = form['tlf'].value;
    var feilmelding = document.getElementById('invalid_tlf_levering');
    if (tlf.toString().length != 8) {
        feilmelding.innerHTML = "Ugyldig telefonnummer";
        feilmelding.style.color = "red";
        feilmelding.style.fontSize = "12px";
        feilmelding.style.display = "inline";
        cart_valid[1] = 0;
        setTimeout(function(){feilmelding.style.display = "none"},2000);
    }
    else {
        cart_valid[1] = 1;
    }
}

function validate_postnummer_cart() {
    var postnummer = document.forms['leveringsskjema']['postnummer'].value;
    var feilmelding = document.getElementById('invalid_postnummer_levering');
    if (postnummer.toString().length != 4) {
        feilmelding.innerHTML = "Ugyldig postnummer";
        feilmelding.style.color = "red";
        feilmelding.style.fontSize = "12px";
        feilmelding.style.display = "inline";
        cart_valid[2] = 0;
        setTimeout(function(){feilmelding.style.display = "none"},2000);
    }
    else {
        cart_valid[2] = 1;
    }
}