import React, { useReducer, useState } from 'react';

const initialState = {
  name: '',
  establishment_year: '',
  address: {
    building: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    landmark: '',
    latitude: '',
    longitude: ''
  },
  courses_offered: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.payload };

    case 'UPDATE_ADDRESS':
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.payload
        }
      };

    case 'ADD_COURSE':
      return {
        ...state,
        courses_offered: [...state.courses_offered, action.payload],
      };

    case 'RESET_FORM':
      return initialState;

    default:
      throw new Error('Invalid action type');
  }
};

const CollegeForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newCourse, setNewCourse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Form submitted:', state);
    } catch (err) {
      setError('An error occurred while submitting the form');
    }
  };

  const handleAddCourse = () => {
    if (newCourse) {
      dispatch({ type: 'ADD_COURSE', payload: newCourse });
      setNewCourse('');
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <h2>Add College Details</h2>
        <label>
          College Name:
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'name', payload: e.target.value })}
          />
        </label>

        <label>
          Establishment Year:
          <input
            type="number"
            value={state.establishment_year}
            onChange={(e) => dispatch({ type: 'UPDATE_FIELD', field: 'establishment_year', payload: e.target.value })}
          />
        </label>

        <h3>Address Details</h3>
        <label>
          Building:
          <input
            type="text"
            value={state.address.building}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'building', payload: e.target.value })}
          />
        </label>

        <label>
          Street:
          <input
            type="text"
            value={state.address.street}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'street', payload: e.target.value })}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            value={state.address.city}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'city', payload: e.target.value })}
          />
        </label>

        <label>
          State:
          <input
            type="text"
            value={state.address.state}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'state', payload: e.target.value })}
          />
        </label>

        <label>
          Pincode:
          <input
            type="text"
            value={state.address.pinCode}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'pinCode', payload: e.target.value })}
          />
        </label>

        <label>
          Landmark:
          <input
            type="text"
            value={state.address.landmark}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'landmark', payload: e.target.value })}
          />
        </label>

        <label>
          Latitude:
          <input
            type="text"
            value={state.address.latitude}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'latitude', payload: e.target.value })}
          />
        </label>

        <label>
          Longitude:
          <input
            type="text"
            value={state.address.longitude}
            onChange={(e) => dispatch({ type: 'UPDATE_ADDRESS', field: 'longitude', payload: e.target.value })}
          />
        </label>

        <h3>Courses Offered</h3>
        <input
          type="text"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button type="button" onClick={handleAddCourse}>
          Add Course
        </button>

        <ul>
          {state.courses_offered.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>College Details</h3>
        <p>College Name: {state.name}</p>
        <p>Establishment Year: {state.establishment_year}</p>
        <p>Address: {state.address.building}, {state.address.street}, {state.address.city}, {state.address.state} - {state.address.pinCode}</p>
        <p>Landmark: {state.address.landmark}</p>
        <p>Coordinates: {state.address.latitude}, {state.address.longitude}</p>
        <p>Courses Offered:</p>
        <ul>
          {state.courses_offered.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollegeForm;
