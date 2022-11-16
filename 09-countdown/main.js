const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempHours = tempDate.getHours();
let tempMinutes = tempDate.getMinutes();
let tempSeconds = tempDate.getSeconds();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, tempHours, tempMinutes, tempSeconds);
const futureTime = futureDate.getTime();

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}.`;

function getRemainingTime() {
    const currentTime = new Date().getTime();
    const timeDifference = futureTime - currentTime;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(timeDifference / oneDay);
    let hours = Math.floor((timeDifference % oneDay) / oneHour);
    let minutes = Math.floor((timeDifference % oneHour) / oneMinute);
    let seconds = Math.floor((timeDifference % oneMinute) / 1000);

    function format(number) {
        if (number < 10) {
            return (number = `0${number}`);
        }
        return number;
    }

    items.forEach(function (item) {
        if (item.classList.contains('days')) {
            item.textContent = format(days);
        }
        if (item.classList.contains('hours')) {
            item.textContent = format(hours);
        }
        if (item.classList.contains('minutes')) {
            item.textContent = format(minutes);
        }
        if (item.classList.contains('seconds')) {
            item.textContent = format(seconds);
        }
    });

    if (timeDifference < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class='expired'> Sorry, this giveaway has expired<h4>`;
    }
}

let countdown = setInterval(getRemainingTime, 1000);
