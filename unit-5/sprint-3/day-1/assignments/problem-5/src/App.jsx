import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
};

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.25s linear;
  }
`;
const initialState = {
  user: null,
  token: null,
  countries: [],
  searchQuery: '',
  paginationType: 'pagination',
  theme: 'light',
  page: 1,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'FETCH_COUNTRIES_SUCCESS':
      return { ...state, countries: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    case 'TOGGLE_PAGINATION':
      return { ...state, paginationType: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { user: 'admin', token: 'fake-jwt-token' } });
    } else {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid credentials' });
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  const handleSearchChange = (e) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await axios.get(
          `https://api.example.com/countries?search=${state.searchQuery}&page=${state.page}`
        );
        dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch countries' });
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (state.searchQuery) {
        fetchCountries();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [state.searchQuery, state.page]);

  const handleNextPage = () => {
    dispatch({ type: 'NEXT_PAGE' });
  };

  const handleTogglePagination = () => {
    dispatch({
      type: 'TOGGLE_PAGINATION',
      payload: state.paginationType === 'pagination' ? 'infinite' : 'pagination',
    });
  };

  return (
    <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div style={{ padding: '20px' }}>
        <h1>Country Search App</h1>
        {state.user ? (
          <>
            <p>Welcome, {state.user}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
          </>
        )}

        <button onClick={toggleTheme}>
          Switch to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <div>
          <h2>Search Countries</h2>
          <input
            type="text"
            value={state.searchQuery}
            placeholder="Search for a country..."
            onChange={handleSearchChange}
          />
        </div>

        <button onClick={handleTogglePagination}>
          Switch to {state.paginationType === 'pagination' ? 'Infinite Scroll' : 'Pagination'}
        </button>

        <div>
          {state.countries.length > 0 ? (
            state.countries.map((country, index) => (
              <div key={index}>
                <p>{country.name}</p>
                <p>Region: {country.region}</p>
              </div>
            ))
          ) : (
            <p>No countries found</p>
          )}
        </div>

        {state.paginationType === 'pagination' && (
          <button onClick={handleNextPage}>Next Page</button>
        )}

        {state.paginationType === 'infinite' && <p>Infinite scrolling enabled...</p>}
      </div>
    </ThemeProvider>
  );
};

export default App;
