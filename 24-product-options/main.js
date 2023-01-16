const images = document.querySelectorAll('.product-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

images.forEach(function (image, index) {
    image.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {
    if (counter > images.length - 1) {
        counter = 4;
    }
    if (counter < 0) {
        counter = 0;
    }
    images.forEach(function (image) {
        image.style.transform = `translateX(-${counter * 100}%)`;
    });
}
