const form = document.querySelector(".formRegistr");
const firstN = document.querySelector(".firstName");
const lastN = document.querySelector(".lastName");
const userN = document.querySelector(".userName");
const password = document.querySelector(".password");
const confirmP = document.querySelector(".confirmPass");
const button = document.querySelector(".registrBtn");

function ifError(input, message) {
    const formVal = input.parentElement;
    const span = formVal.querySelector(".errorMessage");
    formVal.className = "form-validation error";
    span.innerText = message;
}

function ifSuccess(input) {
    const formVal = input.parentElement;
    formVal.className = "form-validation success";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
});

function check() {
    const nameF = firstN.value.trim();
    const nameL = lastN.value.trim();
    const nameU = userN.value.trim();
    const passwordValue = password.value.trim();
    const confirmPass = confirmP.value.trim();

    if (nameF === "") {
        ifError(firstN, "Please enter your first name");
    } else {
        ifSuccess(firstN);
    }
    if (nameL === "") {
        ifError(lastN, "Please enter your Last name");
    } else {
        ifSuccess(lastN);
    }
    if (nameU === "") {
        ifError(userN, "Please create your User name");
    } else {
        ifSuccess(userN);
    }
    if (passwordValue === "") {
        ifError(password, "Password must be enter");
    } else {
        ifSuccess(password);
    }
    if (passwordValue.length < 8) {
        ifError(password, "Password must be at least 6 characters");
    }
    if (confirmPass === "") {
        ifError(confirmP, "Confirm password must be enter");
    } else if (passwordValue != confirmPass) {
        ifError(confirmP, "Passwords don't match");
    } else {
        ifSuccess(confirmP);
    }
    form.reset();
}