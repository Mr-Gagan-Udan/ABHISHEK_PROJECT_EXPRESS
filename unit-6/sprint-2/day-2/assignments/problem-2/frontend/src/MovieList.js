import React, { useEffect, useState } from 'react';
import { getMovies, createMovie, updateMovie, deleteMovie } from './api';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({ title: '', director: '', releaseYear: '' });

    const fetchMovies = async () => {
        try {
            const moviesData = await getMovies();
            setMovies(moviesData);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleAddMovie = async (e) => {
        e.preventDefault();
        try {
            const createdMovie = await createMovie(newMovie);
            setMovies([...movies, createdMovie]);
            setNewMovie({ title: '', director: '', releaseYear: '' });
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            await deleteMovie(id);
            setMovies(movies.filter((movie) => movie.id !== id));
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div>
            <h1>Movie List</h1>
            <form onSubmit={handleAddMovie}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Director"
                    value={newMovie.director}
                    onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Release Year"
                    value={newMovie.releaseYear}
                    onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
                    required
                />
                <button type="submit">Add Movie</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} by {movie.director} ({movie.releaseYear}) 
                        <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
