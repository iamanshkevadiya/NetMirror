import userApi from "../../api/user.api.js";

const form = document.getElementById('AdminDetails');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const user = {
        password: password,
        email: email,
        role: "ADMIN",
    };
    if (!user.email || !user.password) {
        alert("Please enter all required fields");
        return;
    }
    userApi.login(user);
});