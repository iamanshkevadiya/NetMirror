import userApi from "../api/user.api.js";

const form = document.getElementById('userDetails');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const user = {
        password: password,
        email: email,
    };
    if (!user.email || !user.password) {
        alert("Please enter all required fields");
        return;
    }
    if (!user.email.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }
    if (user.email !== user.email) {
        alert("Email does not match");
        return;
    }
    if (user.password !== user.password) {
        alert("Password does not match");
        return;
    }
    userApi.login(user);
});