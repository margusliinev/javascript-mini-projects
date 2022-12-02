const people = [
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg',
        name: 'peter doe',
        job: 'product manager',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg',
        name: 'susan doe',
        job: 'developer',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg',
        name: 'emma doe',
        job: 'designer',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
];

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

function displayPeople(people) {
    const slides = people
        .map((person, index) => {
            let position = 'next';
            if (index === 0) {
                position = 'active';
            }
            if (index === people.length - 1) {
                position = 'last';
            }
            return `<article class="slide ${position}">
                    <img src="${person.img}" class="img" alt="Peter Doe" />
                    <h4>${person.name}</h4>
                    <p class="title">${person.job}</p>
                    <p class="text">${person.text}</p>
                    <div class="quote-icon">
                        <div class="fas fa-quote-right"></div>
                    </div>
                </article>`;
        })
        .join('');
    container.innerHTML = slides;
}

nextBtn.addEventListener('click', function (e) {
    const currentSlide = container.querySelector('.active');
    const nextSlide = container.querySelector('.next');
    const lastSlide = container.querySelector('.last');

    currentSlide.classList.remove('active');
    currentSlide.classList.add('last');

    nextSlide.classList.remove('next');
    nextSlide.classList.add('active');

    lastSlide.classList.remove('last');
    lastSlide.classList.add('next');
});

prevBtn.addEventListener('click', function (e) {
    const currentSlide = container.querySelector('.active');
    const nextSlide = container.querySelector('.next');
    const lastSlide = container.querySelector('.last');

    currentSlide.classList.remove('active');
    currentSlide.classList.add('next');

    nextSlide.classList.remove('next');
    nextSlide.classList.add('last');

    lastSlide.classList.remove('last');
    lastSlide.classList.add('active');
});

displayPeople(people);
