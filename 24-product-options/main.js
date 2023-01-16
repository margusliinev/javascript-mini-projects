const container = document.querySelector('.product-img-container');
const images = document.querySelectorAll('.product-img');
const colorButtons = document.querySelectorAll('.product-color-input');
const memoryButtons = document.querySelectorAll('.product-memory-label');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const form = document.querySelector('form');
const colorTitle = document.querySelector('.product-color-title');
const memoryTitle = document.querySelector('.product-memory-title');
const price = document.querySelector('.product-price');

form.addEventListener('submit', function () {});

colorButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        colorButtons.forEach((button) => {
            button.classList.remove('selected');
        });
        e.currentTarget.classList.add('selected');
        container.firstElementChild.src = `./images/iphone-${e.currentTarget.value}-1.jpg`;
        container.firstElementChild.nextElementSibling.src = `./images/iphone-${e.currentTarget.value}-2.jpg`;
        container.lastElementChild.src = `./images/iphone-${e.currentTarget.value}-3.jpg`;
        colorTitle.textContent = `Color: ${e.currentTarget.value}`;
    });
});

memoryButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        memoryButtons.forEach((button) => {
            button.classList.remove('selected');
        });
        e.currentTarget.classList.add('selected');
        memoryTitle.textContent = `Memory: ${e.currentTarget.nextElementSibling.value}GB`;
        if (e.currentTarget.nextElementSibling.value === '256') {
            price.textContent = 'Price: 1150€';
        } else if (e.currentTarget.nextElementSibling.value === '512') {
            price.textContent = 'Price: 1350€';
        } else {
            price.textContent = 'Price: 950€';
        }
    });
});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    slide();
});

prevBtn.addEventListener('click', function () {
    counter--;
    slide();
});

function slide() {
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
