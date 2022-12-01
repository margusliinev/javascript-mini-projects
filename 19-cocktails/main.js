const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const container = document.querySelector('.section-center');
const loading = document.querySelector('.loading');
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form input');
const title = document.querySelector('.title');

async function fetchDrinks(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
}

function displayDrinks(data) {
    if (!data) {
        title.textContent = 'Sorry, no drinks matched your search.';
        container.innerHTML = '';
    }
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
    loading.classList.add('hide-loading');
    title.textContent = '';
    container.innerHTML = drinks;
}

async function start(url) {
    try {
        const data = await fetchDrinks(url);
        displayDrinks(data);
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    if (input.value === '') {
        start(url);
    } else {
        start(`${baseURL}${input.value}`);
    }
});
document.addEventListener('DOMContentLoaded', start(url));
