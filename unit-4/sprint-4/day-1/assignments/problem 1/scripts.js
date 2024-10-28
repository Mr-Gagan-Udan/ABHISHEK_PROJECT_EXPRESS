// Global variables
let page = 1;
const limit = 10;
const gallery = document.getElementById('gallery');

// Function to fetch data from the API
async function fetchImages(page, limit) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

// Function to append images to the gallery
function appendImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.title;
        gallery.appendChild(imgElement);
    });
}

// Infinite scroll event listener
window.addEventListener('scroll', async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        page++;
        const newImages = await fetchImages(page, limit);
        appendImages(newImages);
    }
});

// Initial load
window.addEventListener('load', async () => {
    const initialImages = await fetchImages(page, limit);
    appendImages(initialImages);
});
