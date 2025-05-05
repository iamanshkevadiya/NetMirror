import { getToken } from "../utils/Cookies.js";

const baseUrl = `http://localhost:8090`;
const addMoviesApi = {
    get: async () => {
        try {
            let addMovie = await fetch(`${baseUrl}/addMovies`);
            let res = await addMovie.json();
            return res;
        } catch (error) {
            console.log("Failed to get addMovies", error);
        }
    },
    post: async (data) => {
        console.log("front data", data);
        try {
            let addMovie = await fetch(`${baseUrl}/addMovies`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
                body: data,
            });
            let res = await addMovie.json();
            console.log(res);
            return res;

        } catch (error) {
            console.log("Failed to post addMoviess", error);
            return null; // Return null in case of error
        }
    },
    delete: async (id) => {
        try {
            let addMovie = await fetch(`${baseUrl}/addMovies/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await addMovie.json();
            return res;
        } catch (error) {
            console.log("Failed to delete addMoviess", error);
        }
    },
    getById: async (id) => {
        try {
            let addMovie = await fetch(`${baseUrl}/addMovies/${id}`);
            let res = await addMovie.json();
            return res;
        } catch (error) {
            console.log("Failed to get addMoviess", error);
        }
    },
    patch: async (id, data) => {
        try {
            let addMovie = await fetch(`${baseUrl}/addMovies/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            });
            let res = await addMovie.json();
            return res;
        } catch (error) {
            console.log("Failed to update addMovies", error);
        }
    },
}

export default addMoviesApi;