import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

export const getMovies = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMovie = async (movie) => {
    const response = await axios.post(API_URL, movie);
    return response.data;
};

export const updateMovie = async (id, movie) => {
    const response = await axios.put(`${API_URL}/${id}`, movie);
    return response.data;
};

export const deleteMovie = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
