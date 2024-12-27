var NameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var MessageError = document.getElementById("message-error");
var EmailError = document.getElementById("email-error");
var SubError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("Contact-name").value.trim();

    if (name.length === 0) {
        NameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        NameError.innerHTML = "Write full name";
        return false;
    }

    NameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("Contact-Phone").value.trim();

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }

    if (phone.length !== 11) {
        phoneError.innerHTML = "Phone number must be exactly 10 digits";
        return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) { 
        phoneError.innerHTML = "Only digits are allowed";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("Contact-Email").value.trim();

    if (email.length === 0) {
        EmailError.innerHTML = "Email is required";
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) { 
        EmailError.innerHTML = "Invalid email address";
        return false;
    }

    EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('Contact-Message').value;
    var required = 30;
    var left = required- message.length;
    if(left>0){
        MessageError.innerHTML = left+'More charachters requried';
        return false;
    }
    MessageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage())  {
        SubError.style.display = 'block';
        SubError.innerHTML = 'Please fix the errors to submit the form';

        setTimeout(function () {
            SubError.style.display = 'none';
        }, 3000);   
        return false; 
    }
    SubError.style.display = 'none';
    SubError.innerHTML = '';
    return true; 
}

