import getUserData from "../utils/Cookies.js";

let { token } = Cookies.get();
console.log("Token:", token);

const decodeToken = token != undefined ? jwt_decode(token) : undefined;

const logout = () => {
    console.log("Logout clicked");
    Cookies.remove("token");
    window.location.href = "/frontend/pages/login.html";

}

const navbar = () => {
    let tag = ``;

    if (decodeToken) {
        tag = `<a class="nav-link" id=logout>Logout</a>`;
    }
    else {
        tag = `<a class="nav-link" href="/frontend/pages/login.html">Login</a>`;
    }

    return `<nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="d-flex justify-content-between header">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="logo">
                            <a class="navbar-brand" href="index.html"><img src=""
                                    alt="LOGO"></a>
                        </div>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">THE Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">E-Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                ${tag}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>`;
}

export default navbar;

document.addEventListener('DOMContentLoaded', () => {
    let logoutBtn = document.getElementById('logout');
    console.log(logoutBtn);

    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});