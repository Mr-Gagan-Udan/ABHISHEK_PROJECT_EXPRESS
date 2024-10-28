import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMatches, addToFavorites, removeFromFavorites } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, footballMatches, error, favorites } = useSelector(
    (state) => state.footballData
  );

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const handleFavorite = (match) => {
    if (favorites.find((fav) => fav.id === match.id)) {
      dispatch(removeFromFavorites(match.id));
    } else {
      dispatch(addToFavorites(match));
    }
  };

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p>Failed to load matches.</p>;

  return (
    <div>
      <h1>Football Matches</h1>

      {/* Search and Filter will go here */}

      <ul>
        {footballMatches.map((match) => (
          <li key={match.id}>
            <div>
              <strong>{match.team1} vs {match.team2}</strong>
              <p>Venue: {match.venue}</p>
              <p>Date: {new Date(match.date).toLocaleDateString()}</p>
              <p>Outcome: {match.outcome}</p>
              <button onClick={() => handleFavorite(match)}>
                {favorites.find((fav) => fav.id === match.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h2>Favorite Matches</h2>
      <ul>
        {favorites.map((match) => (
          <li key={match.id}>
            <strong>{match.team1} vs {match.team2}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
