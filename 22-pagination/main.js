const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const container = document.querySelector('.container');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

async function fetchFollowers() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function displayFollowers(data) {
    const followers = data
        .map((follower) => {
            const { avatar_url, login, html_url } = follower;
            return `<article class="card">
                        <img src="${avatar_url} alt="${login}">
                        <h4>${login}</h4>
                        <a href="${html_url}" target="_blank" class="btn">view profile</a>
                    </article>`;
        })
        .join('');
    container.innerHTML = followers;
}

function paginate(followers) {
    const itemsPerPage = 8;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    });
    return newFollowers;
}

function displayButtons(container, pages, activeIndex) {
    let btns = pages.map((_, pageIndex) => {
        return `<button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : null}" data-index="${pageIndex}">${pageIndex + 1}</button>`;
    });
    btns.push('<button class="next-btn"><i class="fas fa-chevron-right"></i></button>');
    btns.unshift('<button class="prev-btn"><i class="fas fa-chevron-left"></i></button>');
    container.innerHTML = btns.join('');
}

function setupUI() {
    displayFollowers(pages[index]);
    displayButtons(btnContainer, pages, index);
}

async function init() {
    const data = await fetchFollowers();
    pages = paginate(data);
    setupUI();
}

btnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-container')) return;
    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index);
    }
    if (e.target.parentElement.classList.contains('next-btn')) {
        index++;
        if (index > pages.length - 1) {
            index = 0;
        }
    }
    if (e.target.parentElement.classList.contains('prev-btn')) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }
    setupUI();
});
window.addEventListener('load', init);
