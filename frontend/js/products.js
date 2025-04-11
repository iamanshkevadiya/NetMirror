import productApi from "../api/product.api.js";
import navbar from "../componets/navbar.js";
import Cookies from "js-cookie";

document.getElementById("navbar").innerHTML = navbar();

const handleSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").files[0];
    const category = document.getElementById("category").value;
    const type = category === "movie" ? "Movies" : "Series";

    // Create FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('category', category);
    formData.append('type', type);

    try {
        // Check if user is logged in
        const token = Cookies.get('token');
        if (!token) {
            alert('Please login to add movies/series');
            window.location.href = '/frontend/pages/login.html';
            return;
        }

        // Add token to headers
        const response = await productApi.addProduct(formData, token);
        
        if (response.success) {
            alert('Movie/Series added successfully!');
            // Reset form
            document.getElementById("addProductForm").reset();
            // Redirect to movies/series page based on type
            if (type === 'Movies') {
                window.location.href = '/frontend/pages/movies.html';
            } else {
                window.location.href = '/frontend/pages/series.html';
            }
        } else {
            alert('Failed to add movie/series. Please try again.');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        alert('An error occurred. Please try again.');
    }
};

// Add event listener to form
document.getElementById("addProductForm").addEventListener("submit", handleSubmit);
