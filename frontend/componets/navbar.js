let { token } = Cookies.get();
console.log("Token:", token);

const decodeToken = token ? jwt_decode(token) : undefined;

const logout = () => {
    console.log("Logout clicked");
    Cookies.remove("token");
    window.location.href = "/frontend/pages/login.html";
}

const handleSearch = (event) => {
    if (event.key === 'Enter') {
        const searchQuery = event.target.value.trim();
        if (searchQuery) {
            // Redirect to search results page with query parameter
            window.location.href = `/frontend/pages/search.html?q=${encodeURIComponent(searchQuery)}`;
        }
    }
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
                            <a class="navbar-brand" href="/frontend/index.html">
                                <img src="/frontend/images/logo.png" alt="LOGO">
                            </a>
                        </div>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/frontend/index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/frontend/pages/series.html">TV Series</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/frontend/pages/movies.html">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/frontend/pages/addmovies.html">Add Movies</a>
                            </li>
                            <li class="nav-item">
                                ${tag}
                            </li>
                        </ul>
                    </div>
                    <div class="icon d-flex align-items-center">
                        <div class="search-section">
                            <div class="input-group">
                                <input type="text" id="searchInput" class="form-control" placeholder="Search for movies or TV series...">
                                <button class="btn btn-primary" id="searchButton">
                                    <i class="bi bi-search"></i> Search
                                </button>
                            </div>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/frontend/pages/signup.html"><i class="bi bi-people"></i></a>
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