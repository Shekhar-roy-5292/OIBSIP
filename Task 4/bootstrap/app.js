//Form Registration
let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); //stops auto form submission
    if (validateForm()) {
        alert('Form is submitted Successfully');
    } else {
        alert('Something went wrong');
    }
});

// check whether the form is valid or not
let validateForm = () => {
    return (checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());
};
//Check Username which is minimum 4 character maximum 10 character
let checkUserName = () => {
    let inputEl = document.querySelector('#username');
    let inputFeedbackEl = document.querySelector('#username-feedback');
    let regExp = /^[a-zA-Z0-9]{4,10}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInValid(inputEl, inputFeedbackEl);
        return false;
    }
};
//check Email whether it is email or not
let checkEmail = () => {
    let inputEl = document.querySelector('#email');
    let inputFeedbackEl = document.querySelector('#email-feedback');
    let regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInValid(inputEl, inputFeedbackEl);
        return false;
    }
};
//check password whether it's 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
let checkPassword = () => {
    let inputEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#password-feedback');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (regExp.test(inputEl.value)) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInValid(inputEl, inputFeedbackEl);
        return false;
    }
};
//check password and confirm password are same or not
let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password');
    let passwordEl = document.querySelector('#password');
    let inputFeedbackEl = document.querySelector('#c_password-feedback');
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value) {
        makeValid(inputEl, inputFeedbackEl);
        return true;
    }
    else {
        makeInValid(inputEl, inputFeedbackEl);
        return false;
    }
};

//make valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid');
    inputEl.classList.remove('is-form-invalid');
    inputFeedbackEl.classList.add('text-success');
    inputFeedbackEl.classList.remove('text-danger');
    inputFeedbackEl.innerText = 'Looks Good';
}
//make Invalid
let makeInValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid');
    inputEl.classList.add('is-form-invalid');
    inputFeedbackEl.classList.remove('text-success');
    inputFeedbackEl.classList.add('text-danger');
    inputFeedbackEl.innerText = `please Enter a Valid ${inputEl.placeholder}`;
}
//username field with keyup event
let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup', function () {
    checkUserName();
});
//Email field with keyup event
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function () {
    checkEmail();
});
//password field with keyup event
let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function () {
    checkPassword();
});
//Confirm password field with keyup event
let c_passwordEl = document.querySelector('#c_password');
c_passwordEl.addEventListener('keyup', function () {
    checkConfirmPassword();
});