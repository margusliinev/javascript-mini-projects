const sublinks = [
    {
        page: 'products',
        links: [
            { label: 'payment', icon: 'fas fa-credit-card', url: 'products.html' },
            { label: 'terminal', icon: 'fas fa-credit-card', url: 'products.html' },
            { label: 'connect', icon: 'fas fa-credit-card', url: 'products.html' },
        ],
    },
    {
        page: 'developers',
        links: [
            { label: 'plugins', icon: 'fas fa-book', url: 'products.html' },
            { label: 'libraries', icon: 'fas fa-book', url: 'products.html' },
            { label: 'docs', icon: 'fas fa-book', url: 'products.html' },
            { label: 'billing', icon: 'fas fa-book', url: 'products.html' },
        ],
    },
    {
        page: 'company',
        links: [
            { label: 'about', icon: 'fas fa-briefcase', url: 'products.html' },
            { label: 'customers', icon: 'fas fa-briefcase', url: 'products.html' },
        ],
    },
];

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', function () {
    sidebarWrapper.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    sidebarWrapper.classList.remove('show');
});

sidebar.innerHTML = sublinks
    .map((item) => {
        const { links, page } = item;
        return `<article>
                <h4>${page}</h4>
                <div class="sidebar-sublinks">
                    ${links
                        .map((link) => {
                            return `<a href="#">
                                        <i class="${link.icon}"></i>${link.label}
                                    </a>`;
                        })
                        .join('')}
                </div>
            </article>`;
    })
    .join('');
