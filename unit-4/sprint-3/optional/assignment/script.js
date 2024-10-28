const apiKey = 'YOUR_OMDB_API_KEY';  // Replace with your OMDB API key
const searchButton = document.getElementById('searchButton');
const movieTitleInput = document.getElementById('movieTitle');
const movieResults = document.getElementById('movieResults');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let totalPages = 1;

// Function to fetch movie data
async function fetchMovies(title, page = 1) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}`);
        const data = await response.json();

        if (data.Response === 'True') {
            totalPages = Math.ceil(data.totalResults / 10);
            displayMovies(data.Search);
            setupPagination();
        } else {
            displayError(data.Error);
        }
    } catch (error) {
        displayError('Something went wrong. Please try again later.');
    }
}

// Function to display movie data
function displayMovies(movies) {
    movieResults.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
            <div class="movie-details">
                <h2>${movie.Title}</h2>
                <p><strong>Year:</strong> ${movie.Year}</p>
            </div>
        `;
        movieResults.appendChild(movieCard);
    });
}

// Function to display error messages
function displayError(message) {
    movieResults.innerHTML = `<p>${message}</p>`;
}

// Function to set up pagination
function setupPagination() {
    pagination.innerHTML = '';
    
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchMovies(movieTitleInput.value, currentPage);
        }
    });
    pagination.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchMovies(movieTitleInput.value, currentPage);
        }
    });
    pagination.appendChild(nextButton);
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const title = movieTitleInput.value.trim();
    if (title) {
        currentPage = 1;
        fetchMovies(title, currentPage);
    } else {
        displayError('Please enter a movie title.');
    }
});
