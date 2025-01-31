function setActive(button) {
  const buttons = document.querySelectorAll('.btn-group .btn');
  buttons.forEach((btn) => btn.classList.remove('btn-category-active'));
  buttons.forEach((btn) => btn.classList.remove('active'));
  button.classList.add('btn-category-active');

}

window.addEventListener('scroll', function() {
  
  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.getElementById('Scrollnavbar').classList.add('show');
    document.getElementById('Scrollnavbar').classList.remove('Do-not-show');

  } else {
    // user has scrolled down
    document.getElementById('Scrollnavbar').classList.remove('show');
    document.getElementById('Scrollnavbar').classList.add('Do-not-show');
  }

});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmY3ODY1ZmE4NWNlZjY1MDBmMzQ1OGFkNzQ2YmFlMiIsIm5iZiI6MTczNzM4MDM3Mi40NjQsInN1YiI6IjY3OGU1MjE0ZDhhNWIwZDAwYzQzNjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9MHhiJbdd9XT7K_3fl_uL9Ldny1RyHkuG0kEFjTFfM'
  }
};

const movies = { all: [], horror: [], trending: [] };


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {
    movies.all = data.results.map(movie => ({
      title: movie.title,
      image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : "https://via.placeholder.com/200",
      rating: movie.vote_average.toFixed(1),
      release_date: movie.release_date || "Unknown",
      genres: movie.genre_ids 
    }));

    
    movies.horror = movies.all.filter(movie => movie.genres.includes(27)); 
    movies.trending = movies.all.slice(0, 5); 


    filterMovies("all");
  })
  .catch(err => console.error("Error fetching movies:", err));


function filterMovies(category) {
    const moviesContainer = document.getElementById("moviescards");
    moviesContainer.innerHTML = "";

    const selectedMovies = movies[category] || [];

    selectedMovies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <div class="col" style="border-radius:20px;">
                <img src="${movie.image}" alt="${movie.title}" class="card-img">
                <p class="card-img-title">${movie.title}</p>
                <p class="card-img-rating">⭐️ ${movie.rating} | ${movie.release_date}</p>
            </div>
        `;

        moviesContainer.appendChild(card);
    });
}


filterMovies('all')