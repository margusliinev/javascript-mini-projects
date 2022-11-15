const btn = document.querySelector('.nav-btn');
const links = document.querySelector('.nav-links');

const scrollLinks = document.querySelectorAll('.scroll-link');
const nav = document.querySelector('nav');

btn.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        const section = document.querySelector(`${id}`);
        let position = section.offsetTop;
        window.scrollTo({ left: 0, top: position - 80 });
    });
});
