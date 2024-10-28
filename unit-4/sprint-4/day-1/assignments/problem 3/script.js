// OpenWeatherMap API Key
const apiKey = 'YOUR_API_KEY';
const apiBase = 'https://api.openweathermap.org/data/2.5';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const currentWeather = document.getElementById('currentWeather');
const forecastData = document.getElementById('forecastData');
const pagination = document.getElementById('pagination');
const toggleThemeButton = document.getElementById('toggleTheme');
const toggleViewButton = document.getElementById('toggleView');

let isInfiniteScrolling = false;
let currentCity = '';
let currentPage = 1;
let itemsPerPage = 10;

// Load initial theme from localStorage
let theme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-theme', theme === 'dark');

// Toggle Theme
toggleThemeButton.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
});

// Search for a city
searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        currentCity = city;
        fetchCurrentWeather(city);
        fetchWeatherForecast(city);
    }
});

// Fetch current weather data
async function fetchCurrentWeather(city) {
    try {
        const response = await fetch(`${apiBase}/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Display current weather
function displayCurrentWeather(data) {
    currentWeather.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

// Fetch 30-day weather forecast
async function fetchWeatherForecast(city, page = 1) {
    try {
        const response = await fetch(`${apiBase}/forecast?q=${city}&cnt=${itemsPerPage * page}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeatherForecast(data.list, page);
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Display weather forecast
function displayWeatherForecast(forecast, page) {
    if (page === 1) forecastData.innerHTML = ''; // Clear previous data on new search
    forecast.slice((page - 1) * itemsPerPage, page * itemsPerPage).forEach(day => {
        const item = document.createElement('div');
        item.classList.add('forecastItem');
        item.innerHTML = `
            <p>Date: ${new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>Temp: ${day.main.temp}°C</p>
            <p>Weather: ${day.weather[0].description}</p>
        `;
        forecastData.appendChild(item);
    });
    setupPagination(forecast.length, page);
}

// Setup pagination
function setupPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.toggle('active', i === currentPage);
        button.addEventListener('click', () => {
            currentPage = i;
            fetchWeatherForecast(currentCity, i);
        });
        pagination.appendChild(button);
    }
}

// Toggle between pagination and infinite scrolling
toggleViewButton.addEventListener('click', () => {
    isInfiniteScrolling = !isInfiniteScrolling;
    toggleViewButton.innerText = isInfiniteScrolling ? 'Switch to Pagination' : 'Switch to Infinite Scrolling';
    if (isInfiniteScrolling) {
        pagination.style.display = 'none';
        window.addEventListener('scroll', handleScroll);
    } else {
        pagination.style.display = 'block';
        window.removeEventListener('scroll', handleScroll);
    }
});

// Handle scroll for infinite scrolling
function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentPage++;
        fetchWeatherForecast(currentCity, currentPage);
    }
}

// Debounce function to optimize search input
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

searchInput.addEventListener('input', debounce((e) => {
    if (e.target.value.trim()) {
        currentCity = e.target.value.trim();
        fetchCurrentWeather(currentCity);
        fetchWeatherForecast(currentCity);
    }
}, 500));
