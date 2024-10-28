import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffees } from '../redux/actions/coffeeActions';

const CoffeeList = () => {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => state.coffee.coffees);
  const [sortOrder, setSortOrder] = useState('asc');
  useEffect(() => {
    dispatch(fetchCoffees(sortOrder));
  }, [dispatch, sortOrder]);
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <h1>Coffee List</h1>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {coffees.length > 0 ? (
        <ul>
          {coffees.map((coffee) => (
            <li key={coffee.id}>
              {coffee.title} - {coffee.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No coffee available.</p>
      )}
    </div>
  );
};

export default CoffeeList;
