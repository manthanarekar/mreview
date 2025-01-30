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


// const options = {
//   method: 'GET',
//   headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmY3ODY1ZmE4NWNlZjY1MDBmMzQ1OGFkNzQ2YmFlMiIsIm5iZiI6MTczNzM4MDM3Mi40NjQsInN1YiI6IjY3OGU1MjE0ZDhhNWIwZDAwYzQzNjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9MHhiJbdd9XT7K_3fl_uL9Ldny1RyHkuG0kEFjTFfM'
//   }
// };

// console.log('Getting Data...');

// const GetNowPlaying = async () => {
//   try {
//       const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
//       const data = await response.json();
//       console.log(data); 
//   } catch (err) {
//       console.error(err); 
//   }
// };

// GetNowPlaying();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmY3ODY1ZmE4NWNlZjY1MDBmMzQ1OGFkNzQ2YmFlMiIsIm5iZiI6MTczNzM4MDM3Mi40NjQsInN1YiI6IjY3OGU1MjE0ZDhhNWIwZDAwYzQzNjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P9MHhiJbdd9XT7K_3fl_uL9Ldny1RyHkuG0kEFjTFfM'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {
    const movies = data.results.map(movie => ({
      title: movie.title,
      release_date: movie.release_date,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      vote_average: movie.vote_average
    }));
    console.log(movies);
  })
  .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(data => {
    const movies = data.results.map(movie => ({
      title: movie.title,
      release_date: movie.release_date,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      vote_average: movie.vote_average
    }));
    console.log(movies);
  })
  .catch(err => console.error(err));


  const movies = {
    all: [
        { title: "The Shawshank Redemption", image: "https://image.tmdb.org/t/p/w300/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg", rating: "8.7" },
        { title: "Movie 2", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️" },
        { title: "Movie 3", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️⭐️⭐️" },
    ],
    horror: [
        { title: "Horror Movie 1", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️" },
        { title: "Horror Movie 2", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️⭐️" },
    ],
    trending: [
        { title: "Trending Movie 1", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️⭐️" },
        { title: "Trending Movie 2", image: "https://via.placeholder.com/200", rating: "⭐️⭐️⭐️⭐️⭐️" },
    ],
};

// image
// : 
// "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
// release_date
// : 
// "1994-09-23"
// title
// : 
// "The Shawshank Redemption"
// vote_average
// : 
// 8.708


// Function to render movies
function filterMovies(category) {
    const moviesContainer = document.getElementById("moviescards");
    moviesContainer.innerHTML = ""; // Clear previous content

    // Get movies based on the selected category
    const selectedMovies = movies[category];

    // Loop through and display movies
    selectedMovies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <div class="col" style="border-radius="20px;"">
            <img src="${movie.image}" alt="${movie.title}" class="card-img">
            <h3 class="text-danger">${movie.title}</h3>
            <p>${movie.rating}</p>
            </div>
        `;

        moviesContainer.appendChild(card);
    });
}

// Show all movies by default
filterMovies("all");