function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}



function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.innerText = movie.Title;
        movieItem.classList.add('movie-item');
        movieItem.addEventListener('click', () => displayMovieDetails(movie.imdbID));
        movieList.appendChild(movieItem);
    });
}


function displayMovieDetails(imdbID) {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('movieDetails');
            movieDetails.innerHTML = `
                <h2>${data.Title}</h2>
                <p>${data.Plot}</p>
                <img src="${data.Poster}" alt="${data.Title}">
            `;
        });
}
