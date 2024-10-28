document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    const productList = document.getElementById('product-list');
    const sortButton = document.getElementById('sort-button');
    const sortSelect = document.getElementById('sort');

    // Function to fetch and display products
    async function fetchAndDisplayProducts(sortBy = '') {
        try {
            let url = API_URL;
            if (sortBy) {
                url += `?_sort=${sortBy}`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            productList.innerHTML = `<p>${error.message}</p>`;
        }
    }

    // Function to display products on the page
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Email:</strong> ${product.email}</p>
                <p><strong>Address:</strong> ${product.address.street}, ${product.address.city}</p>
            `;
            productList.appendChild(productItem);
        });
    }

    // Event listener for sort button
    sortButton.addEventListener('click', () => {
        const sortBy = sortSelect.value;
        fetchAndDisplayProducts(sortBy);
    });

    // Initial fetch of products
    fetchAndDisplayProducts();
});
