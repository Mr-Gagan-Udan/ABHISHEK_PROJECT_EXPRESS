import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchResults = () => {
  const { searchResults, addFavorite } = useContext(SearchContext);

  if (searchResults.length === 0) {
    return <p>No search results found.</p>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.cacheId} className="result-card">
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.link} target="_blank" rel="noopener noreferrer">Read More</a>
            <button onClick={() => addFavorite(result)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
