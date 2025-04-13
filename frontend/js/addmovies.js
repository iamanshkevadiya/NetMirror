import addMoviesApi from "../api/addmovies.api.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const handleSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("img");
    const category = document.getElementById("category").value;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('img', image.files[0]);
    formData.append('category', category);

    // Debug: Log FormData content
    for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }

    // Call API and handle the result
    const result = await addMoviesApi.post(formData);
    if (result) {
        console.log("Movies successfully posted:", result);
        // Add success handling (e.g., update UI or reset form).
    } else {
        console.error("Failed to post Movies.");
    }
};

// Add event listener to form
document.getElementById("addmovies").addEventListener("submit", handleSubmit);
