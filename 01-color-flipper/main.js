const colors = ['#114084', '#3466aa', '#82b7dc', '#808080', '#f8d7da', '#dc3545', '#d4edda', '#28a745'];

const btn = document.querySelector('#btn');
const navBtn = document.querySelector('.nav-btn');
const color = document.querySelector('.color');
const main = document.querySelector('main');
const popup = document.querySelector('.popup');

btn.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * colors.length);
    let newColor = colors[randomNumber];
    color.textContent = newColor;
    main.style.backgroundColor = newColor;
});

navBtn.addEventListener('click', function () {
    popup.classList.add('show-popup');
    navBtn.disabled = true;
    setTimeout(reset, 2000);
});

function reset() {
    popup.classList.remove('show-popup');
    navBtn.disabled = false;
}
