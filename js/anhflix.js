const movieContainer = document.querySelector('.movie-card-container');
const mainContainer = document.querySelector('.main-card');
const summaryContainer = document.getElementById('movie-summary-container');
const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";


async function loadMovies(page = 1) {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Debug: Check the API response
        console.log(data);

        const movies = data.items;
        const baseImageUrl = data.pathImage;
        totalPages = data.pagination.totalPages;
        currentPage = page
        // Chèn dữ liệu vào container
        movieContainer.innerHTML =
            movies.map((item) => `
            <div class="card">
                    <img class="img-card" src="${baseImageUrl}${item.thumb_url}" alt="Movie Title">
                    <div class="content">
                        <span>${item.name}</span>
                    </div>
                    <div class="play-button"></div>
                </div>
            `).join('');
    } catch (error) {
        console.error("Error loading movies:", error);
    }
}
loadMovies()



