const slides = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', function () {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');

    const slideElements = [first, second, third, fourth, fifth, sixth];
    const slideClasses = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

    slideElements.forEach((slide, index) => {
        if (slide.nextElementSibling === null) {
            slide.classList.remove(`${slideClasses[index]}`);
            slides.firstElementChild.classList.add(`${slideClasses[index]}`);
        } else {
            slide.classList.remove(`${slideClasses[index]}`);
            slide.nextElementSibling.classList.add(`${slideClasses[index]}`);
        }
    });
});

prevBtn.addEventListener('click', function () {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');

    const slideElements = [first, second, third, fourth, fifth, sixth];
    const slideClasses = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

    slideElements.forEach((slide, index) => {
        if (slide.previousElementSibling === null) {
            slide.classList.remove(`${slideClasses[index]}`);
            slides.lastElementChild.classList.add(`${slideClasses[index]}`);
        } else {
            slide.classList.remove(`${slideClasses[index]}`);
            slide.previousElementSibling.classList.add(`${slideClasses[index]}`);
        }
    });
});
