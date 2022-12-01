const drinkImage = document.querySelector('.drink-img');
const drinkName = document.querySelector('.drink-name');
const drinkInstructions = document.querySelector('.drink-instructions');

async function fetchDrinks(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
}

async function displaySingleDrink() {
    const id = localStorage.getItem('drink');
    if (!id) {
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        drinkImage.src = drink[0].strDrinkThumb;
        drinkName.textContent = drink[0].strDrink;
        drinkInstructions.textContent = drink[0].strInstructions;
    }
}

document.addEventListener('DOMContentLoaded', displaySingleDrink);
