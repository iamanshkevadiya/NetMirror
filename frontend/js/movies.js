import addMoviesApi from "../api/addmovies.api.js";
import moviesApi from "../api/movies.api.js";
import navbar from "../componets/navbar.js";
let { token } = Cookies.get();

document.getElementById("navbar").innerHTML = navbar();

const mapper = (data) => {
<<<<<<< HEAD
    data.forEach(({ user, _id, title, description, img }) => {

        let movie_iteams = document.getElementById("moviesContainer");

        const div = document.createElement("div");
        // container.classList.add("card", "col-3", "m-2", "p-2", "bg-light");

        let a = document.createElement("a");
        a.style = "";

        const imgElement = document.createElement("img");
        imgElement.src = `http://localhost:8090/${img}`;
        imgElement.alt = title;
        // imgElement.classList.add("card-img-top", "img-fluid");
=======
    data.forEach(({ user, _id, title, description, image }) => {
        console.log(`User: ${user}, ID: ${_id}, Title: ${title}, Description: ${description}, Image: ${image}`);
        
        const container = document.createElement("div");
        container.classList.add("card", "col-3", "m-2", "p-2", "bg-light");

        const imgElement = document.createElement("img");
        imgElement.src = `http://localhost:8090/${image}`;
        imgElement.classList.add("card-img-top", "img-fluid");
>>>>>>> 290ed18779b78c023a929a82a765bf895248acab

        const titleElement = document.createElement("h5");
        titleElement.textContent = title;
        // titleElement.classList.add("card-title");

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;
        // descriptionElement.classList.add("card-text");

        const buttonGroup = document.createElement("div");
        buttonGroup.textContent = "Watch Movie";
        // buttonGroup.classList.add("btn-group", "d-flex");

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "w-100");
        deleteButton.addEventListener("click", async () => {
            await moviesApi.deleteCart(_id);
            container.remove();
            console.log(`Deleted movie with ID: ${_id}`);
        });

        buttonGroup.appendChild(deleteButton);
        a.appendChild(imgElement, titleElement, descriptionElement);
        div.appendChild(a, buttonGroup);
        movie_iteams.appendChild(div);

<<<<<<< HEAD
=======
        document.getElementById("moviesContainer").appendChild(container);

        return user;
>>>>>>> 290ed18779b78c023a929a82a765bf895248acab
    });
}

const getMovies = async (token) => {
    try {
<<<<<<< HEAD
        const data = await addMoviesApi.get();
        if (!data || data.length === 0) {
            console.warn("No movies available.");
            document.getElementById("moviesContainer").textContent = "No Movies available.";
            return;
        }
        mapper(data);
=======
        // Fetch movies from the API
        console.log(token);
        
        
        const movies = await productApi.get();
        console.log("Movies:", movies);
        
        // if (!data || data.length === 0) {
        //     console.warn("No products available.");
        //     document.getElementById("moviesContainer").textContent = "No Movies available.";
        //     return;
        // }
        mapper(movies);
>>>>>>> 290ed18779b78c023a929a82a765bf895248acab
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById("moviesContainer").textContent = "Failed to load movies. Please try again later.";
    }
}

getMovies();
