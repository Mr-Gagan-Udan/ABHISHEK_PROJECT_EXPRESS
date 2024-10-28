import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export const getProducts = async (page = 1, limit = 10, sort = 'asc', search = '') => {
    const response = await axios.get(API_URL, {
        params: { page, limit, sort, search },
    });
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
};

export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
