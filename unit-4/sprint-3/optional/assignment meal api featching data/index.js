// Get references to the buttons
const getCategoryDataButton = document.getElementById('get-category-data');
const getIngredientDataButton = document.getElementById('get-ingredient-data');

// Function to fetch category data
async function getCategoryData() {
    const categoryAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    
    try {
        const response = await fetch(categoryAPI);
        const data = await response.json();
        console.log('Category Data:', data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Function to fetch ingredient data
async function getIngredientData() {
    const ingredientAPI = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken%20breast';
    
    try {
        const response = await fetch(ingredientAPI);
        const data = await response.json();
        console.log('Ingredient Data:', data);
    } catch (error) {
        console.error('Something went wrong:', error);
    }
}

// Attach event listeners to the buttons
getCategoryDataButton.addEventListener('click', getCategoryData);
getIngredientDataButton.addEventListener('click', getIngredientData);
