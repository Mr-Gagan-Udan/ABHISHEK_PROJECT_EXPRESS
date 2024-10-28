import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { fetchSearchResults } from '../services/api';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setSearchResults, saveSearch } = useContext(SearchContext);
  
  const apiKey = 'YOUR_GOOGLE_API_KEY';
  const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID';

  const handleSearch = async () => {
    const results = await fetchSearchResults(query, apiKey, cx);
    setSearchResults(results);
    saveSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
