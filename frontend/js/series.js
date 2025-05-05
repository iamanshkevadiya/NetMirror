import moviesApi from "../api/movies.api.js";
import addMoviesApi from "../api/addmovies.api.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const mapper = (data) => {
    const container = document.getElementById("seriesContainer");
    container.innerHTML = ''; // Clear existing content

    if (!data || data.length === 0) {
        container.innerHTML = '<div class="no-movies">No TV series available</div>';
        return;
    }

    data.forEach(({ _id, title, description, image, category }) => {
        if (category === "series") {
            const card = document.createElement("div");
            card.classList = "series-list";

            card.innerHTML = `
                <div class="series-card">
                    <img src="http://localhost:8090/${image}" class="card-img-top" alt="${title}">
                    <div class="series-details">
                        <h2 class="card-title">${title}</h2>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        }
    });
}

const getSeries = async () => {
    try {
        // Show loading state
        document.getElementById("seriesContainer").innerHTML = '<div class="loading">Loading TV series...</div>';

        const series = await addMoviesApi.get();
        console.log("Series:", series);
        mapper(series);
    } catch (error) {
        console.error("Error fetching TV series:", error);
        document.getElementById("seriesContainer").innerHTML = '<div class="no-movies">Failed to load TV series. Please try again later.</div>';
    }
}

// Load series when page loads
document.addEventListener('DOMContentLoaded', getSeries); 