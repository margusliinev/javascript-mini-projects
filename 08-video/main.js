const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener('click', function () {
    switchBtn.classList.toggle('slide');
    if (switchBtn.classList.contains('slide')) {
        video.pause();
    } else {
        video.play();
    }
});
