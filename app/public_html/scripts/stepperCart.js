var current_step = 1;
// sets step connectors as correct height according to size of step content boxes
window.addEventListener('load', function() {

	button1 = document.getElementById('2from1');
	button1.addEventListener('click', function() {
		change_step(2);
	});
	button2 = document.getElementById('1from2');
	button2.addEventListener('click', function() {
		change_step(1);
	});
	button4 = document.getElementById('2from3');
	button4.addEventListener('click', function() {
		change_step(2);
	});


	connector1 = document.getElementById('connector-1');
	connector2 = document.getElementById('connector-2');

	content1 = document.getElementById('content-1');
	content2 = document.getElementById('content-2');
	content3 = document.getElementById('content-3');

	// gets height from content box and sets the step connector (vertical line) accordingly
	content1_sheight = window.getComputedStyle(content1, null).height;
	content1_height = content1_sheight.toString().replace(/px/, "");
	connector1.style.height = (Number(content1_height)-80).toString() + 'px';

	content2_sheight = window.getComputedStyle(content2, null).height;
	content2_height = content2_sheight.toString().replace(/px/, "");
	connector2.style.height = (Number(content2_height)-80).toString() + 'px';
	// Tracks the current step
	var validated_info = 0;

	// Checks if user is trying to go to current step, if not change css of the other steps and jump to desired step
	let change_step = function(jump_to) {
		// Cart confirmation
		if(jump_to == 1) {
			if (current_step == 1)
				return;
			else {
				// disable 2 and 3, enable 1 and change current step
				change_opacity(2, 3, 1);
				enable_disable_elements(1);
				current_step = 1;

				// smoothly scrolls to the step
				document.querySelector('#content-1').scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
		// Customer-information
		else if(jump_to == 2) {
			if (current_step == 2)
				return;
			else {
				// disable 1 and 3, enable 2 and change current step
				change_opacity(1, 3, 2);
				enable_disable_elements(2);
				current_step = 2;

				// smoothly scrolls to the step
				document.querySelector('#content-2').scrollIntoView({
					behavior: 'smooth'
				});

				// prevents user from jumping straight to "lever ordre" through step overview with invalid info
				// forces another info validation
				validated_info = 0;
			}
		}
		// Final confirmation and extra information - send order
		else {
			if (current_step == 3)
				return;
			else {
				if(validated_info == 0) {
					alert("Send inn kundeinformasjon på nytt for å forhindre feil");
					return;
				}

				// disable 1 and 2, enable 3 and change current step
				change_opacity(1, 2, 3);
				enable_disable_elements(3);
				current_step = 3;

				// smoothly scrolls to the step
				document.querySelector('#content-3').scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	}

});
let change_step = function(jump_to) {
	// Cart confirmation
	if(jump_to == 1) {
		if (current_step == 1)
			return;
		else {
			// disable 2 and 3, enable 1 and change current step
			change_opacity(2, 3, 1);
			enable_disable_elements(1);
			current_step = 1;

			// smoothly scrolls to the step
			document.querySelector('#content-1').scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
	// Customer-information
	else if(jump_to == 2) {
		if (current_step == 2)
			return;
		else {
			// disable 1 and 3, enable 2 and change current step
			change_opacity(1, 3, 2);
			enable_disable_elements(2);
			current_step = 2;

			// smoothly scrolls to the step
			document.querySelector('#content-2').scrollIntoView({
				behavior: 'smooth'
			});

			// prevents user from jumping straight to "lever ordre" through step overview with invalid info
			// forces another info validation
			validated_info = 0;
		}
	}
	// Final confirmation and extra information - send order
	else {
		if (current_step == 3)
			return;
		else {
			if(validated_info == 0) {
				alert("Send inn kundeinformasjon på nytt for å forhindre feil");
				return;
			}

			// disable 1 and 2, enable 3 and change current step
			change_opacity(1, 2, 3);
			enable_disable_elements(3);
			current_step = 3;

			// smoothly scrolls to the step
			document.querySelector('#content-3').scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
}
// Change the css of the two other steps not "in action"
function change_opacity(div1, div2, curr_div) {
	var div_name = "content-";
	var number_name = "visual_step";

	// makes id of elements to be changed - step1&step2 will be disabled, current will be enabled
	var step1 = document.getElementById(div_name + div1.toString());
	var step2 = document.getElementById(div_name + div2.toString());
	var current = document.getElementById(div_name + curr_div.toString());

	// change step overview css
	var visual1 = document.getElementById(number_name + div1.toString());
	var visual2 = document.getElementById(number_name + div2.toString());
	var visual_current = document.getElementById(number_name + curr_div.toString());

	// change css of numbers on left side
	visual1.style.transition = "0.4s all";
	visual2.style.transition = "0.4s all";
	visual_current.style.transition = "0.4s all";

	visual1.className = "inactive_step";
	visual2.className = "inactive_step";
	visual_current.className = "active_step";

	// change css of divs
	step1.style.transition = "0.4s all";
	step2.style.transition = "0.4s all";
	current.style.transition = "0.4s all";

	step1.style.opacity = 0.2;
	step2.style.opacity = 0.2;
	current.style.opacity = 1;
}

// disable/enable relevant input fileds and buttons according to step
function enable_disable_elements(step){
	// correct inputs and buttons for step 1
	if(step == 1) {
		// disable/enable relevant buttons
		document.getElementById('2from1').disabled = false;
		document.getElementById('1from2').disabled = true;
		document.getElementById('3from2').disabled = true;
		document.getElementById('2from3').disabled = true;
		document.forms['leveringsskjema']['submit'].disabled = true;

		// disable/enable relevant input fields
		document.forms['leveringsskjema']['fornavn'].disabled = true;
		document.forms['leveringsskjema']['etternavn'].disabled = true;
		document.forms['leveringsskjema']['adresse'].disabled = true;
		document.forms['leveringsskjema']['postnummer'].disabled = true;
		document.forms['leveringsskjema']['email'].disabled = true;
		document.forms['leveringsskjema']['tlf'].disabled = true;
		document.forms['leveringsskjema']['message'].disabled = true;
	}
	// correct inputs and buttons for step 2
	else if(step == 2) {
		// disable/enable relevant buttons
		document.getElementById('2from1').disabled = true;
		document.getElementById('1from2').disabled = false;
		document.getElementById('3from2').disabled = false;
		document.getElementById('2from3').disabled = true;
		document.forms['leveringsskjema']['submit'].disabled = true;

		// disable/enable relevant input fields
		document.forms['leveringsskjema']['fornavn'].disabled = false;
		document.forms['leveringsskjema']['etternavn'].disabled = false;
		document.forms['leveringsskjema']['adresse'].disabled = false;
		document.forms['leveringsskjema']['postnummer'].disabled = false;
		document.forms['leveringsskjema']['email'].disabled = false;
		document.forms['leveringsskjema']['tlf'].disabled = false;
		document.forms['leveringsskjema']['message'].disabled = true;
	}
	// correct inputs and buttons for step 3
	else {
		// disable/enable relevant buttons
		document.getElementById('2from1').disabled = true;
		document.getElementById('1from2').disabled = true;
		document.getElementById('3from2').disabled = true;
		document.getElementById('2from3').disabled = false;
		document.forms['leveringsskjema']['submit'].disabled = false;

		// disable/enable relevant input fields
		document.forms['leveringsskjema']['fornavn'].disabled = true;
		document.forms['leveringsskjema']['etternavn'].disabled = true;
		document.forms['leveringsskjema']['adresse'].disabled = true;
		document.forms['leveringsskjema']['postnummer'].disabled = true;
		document.forms['leveringsskjema']['email'].disabled = true;
		document.forms['leveringsskjema']['tlf'].disabled = true;
		document.forms['leveringsskjema']['message'].disabled = false;
	}
}
