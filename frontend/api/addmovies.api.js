import { getToken } from "../utils/Cookies.js";

const baseUrl = "http://localhost:8090";
const addMoviesApi = {
    get: async () => {
        try {
            let addMovies = await fetch(`${baseUrl}/addMovies`);
            let res = await addMovies.json();
            return res;
        } catch (error) {
            console.log("Failed to get addMovies", error);
        }
    },
    post: async (data) => {
        console.log(data);
        try {
            let addMovies = await fetch(`${baseUrl}/addMovies`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
                body: data,
            });
            let res = await addMovies.json();
            return res;
        } catch (error) {
            console.log("Failed to post addMoviess", error);
            return null; // Return null in case of error
        }
    },
    delete: async (id) => {
        try {
            let addMovies = await fetch(`${baseUrl}/addMovies/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            });
            let res = await addMovies.json();
            return res;
        } catch (error) {
            console.log("Failed to delete addMoviess", error);
        }
    },
    getById: async (id) => {
        try {
            let addMovies = await fetch(`${baseUrl}/addMoviess/${id}`);
            let res = await addMovies.json();
            return res;
        } catch (error) {
            console.log("Failed to get addMoviess", error);
        }
    },
    patch: async (id, data) => {
        try {
            let addMovies = await fetch(`${baseUrl}/addMoviess/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            });
            let res = await addMovies.json();
            return res;
        } catch (error) {
            console.log("Failed to update addMoviess", error);
        }
    },
}

export default addMoviesApi;