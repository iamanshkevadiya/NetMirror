import moviesApi from "../api/movies.api.js";
import productApi from "../api/product.api.js";
import navbar from "../componets/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

const mapper = (data) => {
    data.forEach(({ user, _id, title, description, img }) => {
        const container = document.createElement("div");
        container.classList.add("card", "col-3", "m-2", "p-2", "bg-light");

        const imgElement = document.createElement("img");
        imgElement.src = `http://localhost:8090/${img}`;
        imgElement.classList.add("card-img-top", "img-fluid");

        const titleElement = document.createElement("h5");
        titleElement.classList.add("card-title");
        titleElement.innerText = title;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("card-text");
        descriptionElement.innerText = description;

        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("btn-group", "d-flex");

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "w-100");
        deleteButton.addEventListener("click", async () => {
            await moviesApi.deleteCart(_id);
            container.remove();
            console.log(`Deleted movie with ID: ${_id}`);
        });

        buttonGroup.appendChild(deleteButton);
        container.appendChild(imgElement);
        container.appendChild(titleElement);
        container.appendChild(descriptionElement);
        container.appendChild(buttonGroup);

        document.getElementById("moviesContainer").appendChild(container);
    });
}

const getMovies = async () => {
    try {
        const movies = await productApi.getByUserId();
        if (!data || data.length === 0) {
            console.warn("No products available.");
            document.getElementById("moviesContainer").textContent = "No Movies available.";
            return;
        }
        mapper(movies);
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById("moviesContainer").textContent = "Failed to load products. Please try again later.";
    }
}
getMovies();
