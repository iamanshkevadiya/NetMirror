import moviesApi from "../api/movies.api.js";
import addMoviesApi from "../api/addmovies.api.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

// Function to search content
const searchContent = async (searchTerm) => {
    try {
        // Show loading state
        const container = document.getElementById("searchResults");
        container.innerHTML = '<div class="loading">Searching...</div>';

        // Get both movies and series
        const movies = await addMoviesApi.get();

        // Filter results based on search term
        const searchResults = movies.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Display results
        displaySearchResults(searchResults);
    } catch (error) {
        console.error("Error searching content:", error);
        document.getElementById("searchResults").innerHTML =
            '<div class="no-results">Failed to search. Please try again later.</div>';
    }
};

// Function to display search results
const displaySearchResults = (results) => {
    const container = document.getElementById("searchResults");
    container.innerHTML = ''; // Clear existing content

    if (!results || results.length === 0) {
        container.innerHTML = '<div class="no-results">No movies or TV series found matching your search.</div>';
        return;
    }

    results.forEach(({ _id, title, description, image, category }) => {
        const card = document.createElement("div");
        card.classList = "content-card";

        card.innerHTML = `
            <div class="serach-card">
                <img src="http://localhost:8090/${image}" class="card-img-top" alt="${title}">
                <div class="search-details">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${description}</p>
                    <span class="badge ${category === 'movie' ? 'bg-primary' : 'bg-success'}">${category}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

// Get search term from URL and perform search
document.addEventListener('DOMContentLoaded', () => {
    const searchTerm = getQueryParam('query');
    if (searchTerm) {
        searchContent(searchTerm);
    }
});