const toggle = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebarLinks = document.querySelectorAll('.scroll-link');
const sidebar = document.querySelector('.sidebar');
const sections = document.querySelectorAll('section');

toggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});

sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 900px)').matches) {
            sidebar.classList.remove('show-sidebar');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(min-width: 1200px)').matches) {
        sidebar.classList.add('show-sidebar');
        sections.forEach(function (section) {
            section.classList.add('fixed-sidebar');
        });
    } else {
        sidebar.classList.remove('show-sidebar');
        sections.forEach(function (section) {
            section.classList.remove('fixed-sidebar');
        });
    }
});

window.matchMedia('(min-width: 1200px)').addEventListener('change', function () {
    if (window.matchMedia('(min-width: 1200px)').matches) {
        sidebar.classList.add('show-sidebar');
        sections.forEach(function (section) {
            section.classList.add('fixed-sidebar');
        });
    } else {
        sidebar.classList.remove('show-sidebar');
        sections.forEach(function (section) {
            section.classList.remove('fixed-sidebar');
        });
    }
});
