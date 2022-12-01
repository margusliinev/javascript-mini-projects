const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const container = document.querySelector('.section-center');

async function fetchDrinks() {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
}

function displayDrinks(data) {
    const drinks = data
        .map((drink) => {
            return `<a href="drink.html">
                    <article class="cocktail" data-id="${drink.idDrink}">
                        <img src="${drink.strDrinkThumb}" alt="cocktail" />
                        <h3>${drink.strDrink}</h3>
                    </article>
                </a>`;
        })
        .join('');
    container.innerHTML = drinks;
}

async function start() {
    const data = await fetchDrinks();
    displayDrinks(data);
}

document.addEventListener('DOMContentLoaded', start);
