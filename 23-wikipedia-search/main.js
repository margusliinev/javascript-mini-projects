const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const page_url = 'https://en.wikipedia.org/?curid=';
const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const results = document.querySelector('.results');

async function fetchPages(searchValue) {
    try {
        const response = await fetch(`${url}${searchValue}`);
        const data = await response.json();
        const searchResults = data.query.search;
        if (searchResults < 1) {
            results.innerHTML = `<div class="error">No results found, please try again</div>`;
            setTimeout(function () {
                results.innerHTML = '';
            }, 2000);
        } else {
            displayResults(searchResults);
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(list) {
    const cardsList = list
        .map((item) => {
            const { title, snippet, pageid } = item;
            return `<a href="https://en.wikipedia.org/?curid=${pageid}" target="_blank">
                        <h4>${title}</h4>
                        <p>${snippet}</p>
                    </a>`;
        })
        .join('');
    results.innerHTML = `<div class="articles">
                            ${cardsList}
                         </div>`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) {
        results.innerHTML = '<div class="error">please enter valid search term</div>';
        setTimeout(function () {
            results.innerHTML = '';
        }, 2000);
        return;
    }
    fetchPages(value);
});
