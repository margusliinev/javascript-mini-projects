const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const url = 'https://icanhazdadjoke.com/';

btn.addEventListener('click', () => {
    fetchDadJoke();
});

const fetchDadJoke = async () => {
    try {
        const response = await fetch(url, { headers: { Accept: 'application/json', 'User-Agent': 'learning app' } });
        const data = await response.json();
        result.textContent = data.joke;
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
    } catch (error) {
        console.log(error);
        result.textContent = 'Failed to fetch data, sry no joke.';
    }
};

document.addEventListener('DOMContentLoaded', fetchDadJoke);
