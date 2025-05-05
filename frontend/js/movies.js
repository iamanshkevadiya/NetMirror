import moviesApi from "../api/movies.api.js";
import addMoviesApi from "../api/addmovies.api.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const mapper = (data) => {
    const container = document.getElementById("moviesContainer");
    container.innerHTML = ''; // Clear existing content

    if (!data || data.length === 0) {
        container.innerHTML = '<div class="no-movies">No movies available</div>';
        return;
    }

    data.forEach(({ _id, title, description, image, category }) => {
        if (category === "movie") {
            const card = document.createElement("div");
            card.classList = "movies-list";

            card.innerHTML = `
                <div class="movie-card">
                    <img src="http://localhost:8090/${image}" class="card-img-top" alt="${title}">
                    <div class="movie-details">
                        <h2 class="card-title">${title}</h2>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

const getMovies = async () => {
    try {
        // Show loading state
        document.getElementById("moviesContainer").innerHTML = '<div class="loading">Loading movies...</div>';

        const movies = await addMoviesApi.get();
        console.log("Movies:", movies);
        mapper(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
        document.getElementById("moviesContainer").innerHTML = '<div class="no-movies">Failed to load movies. Please try again later.</div>';
    }
}

// Load movies when page loads
document.addEventListener('DOMContentLoaded', getMovies);