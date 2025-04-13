import { getToken } from "../utils/Cookies.js";
const baseUrl = "http://localhost:8090";

const moviesApi = {
    getByUserId: async () => {
        try {
            let movies = await fetch(`${baseUrl}/movies`, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await movies.json();
            return res;
        } catch (error) {
            console.log("Failed to get movies", error);
        }
    },
    addToCart: async (movies) => {
        console.log("Adding product to cart:", movies);

        try {
            let movies = await fetch(`${baseUrl}/movies`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "content-type": "application/json",
                },
                body: JSON.stringify(movies),
            });
            let res = await movies.json();
            return res;
        } catch (error) {
            console.log("Failed to add movies", error);
        }
    },
    deleteCart: async (moviesId) => {
        try {
            let movies = await fetch(`${baseUrl}/movies/${moviesId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await movies.json();
            return res;
        } catch (error) {
            console.log("Failed to delete movies", error);
        }
    },
};

export default moviesApi;