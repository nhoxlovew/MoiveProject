const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";

async function loadMovies() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const movies = data.items; // Adjust based on actual API response structure
        const movieContainer = document.querySelector('.movie-card');

        // Clear existing content
        movieContainer.innerHTML = '';

        // Generate movie cards
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                    <img class="img-card" src="${movie.image}" alt="${movie.title}">
                    <div class="content">${movie.title}</div>
                `;
            movieContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading movies:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadMovies);
///dasd