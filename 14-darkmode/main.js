const articles = [
    {
        id: 1,
        title: 'the WET Codbase',
        date: 'Sun Oct 04 2020,',
        length: 11,
        snippet: `I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.`,
    },
    {
        id: 2,
        title: 'goodby, clean code',
        date: 'Fri Nov 22 2020,',
        length: 5,
        snippet: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.`,
    },
    {
        id: 3,
        title: 'my decade in review',
        date: 'Tue Dec 09 2020,',
        length: 5,
        snippet: `Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.`,
    },
    {
        id: 4,
        title: 'what are the react team principles',
        date: 'Wed Jan 17 2021,',
        length: 5,
        snippet: `Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.`,
    },
];

const toggleBtn = document.querySelector('.btn');
const container = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
});

const data = articles
    .map((article) => {
        const { title, date, length, snippet } = article;
        return `<article class="post">
                <h2>${title}</h2>
                <div class="post-info">
                    <span>${date}</span>
                    <span>${length} min read</span>
                </div>
                <p>${snippet}</p>
            </article>`;
    })
    .join('');
container.innerHTML = data;
