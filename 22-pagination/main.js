const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const title = document.querySelector('.section-title h1');
const container = document.querySelector('.container');

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
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    });
    return newFollowers;
}

async function init() {
    const data = await fetchFollowers();
    title.textContent = 'Pagination';
    displayFollowers(paginate(data)[0]);
    const pages = paginate(data);
}

window.addEventListener('load', init);
