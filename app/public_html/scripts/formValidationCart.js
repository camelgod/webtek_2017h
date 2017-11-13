window.addEventListener('load', function() {
	form = document.getElementById('leveringsskjema');

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

	input_submit = document.getElementById('submit_button');
	input_submit.addEventListener('click', function() {
		console.log(input_submit);
		submit('cart', form);
	});
});
