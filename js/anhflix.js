const movieContainer = document.querySelector('.movie-card-container');
const apiURL = "https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1";

async function loadMovies() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        // Debug: Check the API response
        console.log(data);

        const movies = data.items;
        console.log(movies.name);
        const baseImageUrl = data.pathImage;


        //Cho mỗi hàng 5 phim
        const row = [];

        // Chèn dữ liệu vào container
        movieContainer.innerHTML = 
        movies.map((item)=>`
            <div class="card">
                    <img class="img-card" src="${baseImageUrl}${item.thumb_url}" alt="Movie Title">
                    <div class="content">
                        <span>${item.name}</span>
                    </div>
                </div>
            `).join('');
        

        // Generate movie cards
        
    } catch (error) {
        console.error("Error loading movies:", error);
    }
}

loadMovies()

