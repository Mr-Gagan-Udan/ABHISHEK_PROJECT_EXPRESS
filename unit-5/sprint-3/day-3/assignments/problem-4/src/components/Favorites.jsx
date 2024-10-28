import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const Favorites = () => {
  const { favorites } = useContext(SearchContext);

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((fav, index) => (
          <div key={index} className="favorite-card">
            <h3>{fav.title}</h3>
            <p>{fav.snippet}</p>
            <a href={fav.link} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
