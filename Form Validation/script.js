const email = document.getElementById('email');
const country = document.getElementById('country');
const pincode = document.getElementById('pincode');
const password = document.getElementById('password');

function pressed() {
    let isValid = true;

    if (!email.checkValidity()) {
        document.getElementById('e_valid').innerHTML = email.validationMessage;
        isValid = false;
    } else {
        document.getElementById('e_valid').innerHTML = '';
    }

    if (!country.checkValidity()) {
        document.getElementById('c_valid').innerHTML = country.validationMessage;
        isValid = false;
    } else {
        document.getElementById('c_valid').innerHTML = '';
    }

    if (!pincode.checkValidity()) {
        document.getElementById('pin_valid').innerHTML = pincode.validationMessage;
        isValid = false;
    } else {
        document.getElementById('pin_valid').innerHTML = '';
    }

    if (!password.checkValidity()) {
        document.getElementById('pas_valid').innerHTML = password.validationMessage;
        isValid = false;
    } else {
        document.getElementById('pas_valid').innerHTML = '';
    }

    return isValid; // Return false if form is not valid to prevent submission
}
