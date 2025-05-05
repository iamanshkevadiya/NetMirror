import { getToken } from "../utils/Cookies.js";
const baseUrl = "http://localhost:8090";

const moviesApi = {
    getByUserId: async () => {
        try {
            let movie = await fetch(`${baseUrl}/movies`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await movie.json();
            return res;
        } catch (error) {
            console.log("Failed to get movies", error);
        }
    },
    addToCart: async (movie) => {
        console.log("Adding product to cart:", movie);

        try {
            let movie = await fetch(`${baseUrl}/movies`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify(movie),
            });
            let res = await movie.json();
            return res;
        } catch (error) {
            console.log("Failed to add movies", error);
        }
    },
    deleteCart: async (movieId) => {
        try {
            let movie = await fetch(`${baseUrl}/movies/${movieId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await movie.json();
            return res;
        } catch (error) {
            console.log("Failed to delete movies", error);
        }
    },
};

export default moviesApi;