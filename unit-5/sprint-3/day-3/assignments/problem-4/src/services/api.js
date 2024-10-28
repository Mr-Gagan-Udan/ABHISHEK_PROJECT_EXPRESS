import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/customsearch/v1';
export const fetchSearchResults = async (query, apiKey, cx, type = '') => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        key: apiKey,
        cx,
        q: query,
        searchType: type,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
