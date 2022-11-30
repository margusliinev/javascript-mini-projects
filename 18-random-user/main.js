function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element exists`);
    }
}

const url = 'https://randomuser.me/api/';
const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const container = get('.container');
const btns = [...document.querySelectorAll('.icon')];

async function fetchUser(url) {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const image = person.picture.large;
    const name = `${person.name.first} ${person.name.last}`;
    const email = person.email;
    const age = person.dob.age;
    const street = `${person.location.street.number}, ${person.location.street.name}`;
    const phone = person.cell;
    const password = person.login.password;
    return { image, name, email, age, street, phone, password };
}

function displayUser(person) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    img.src = person.image;
    title.textContent = `My name is`;
    value.textContent = person.name;
    btns[0].classList.add('active');
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', (e) => {
            if (e.currentTarget.dataset.label === label) {
                title.textContent = `My ${label} is`;
                value.textContent = person[label];
                btns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                btn.classList.add('active');
            }
        });
    });
}

async function showUser() {
    const person = await fetchUser(url);
    displayUser(person);
}

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
