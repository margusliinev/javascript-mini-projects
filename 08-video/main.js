const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const header = document.querySelector('header');

switchBtn.addEventListener('click', function () {
    switchBtn.classList.toggle('slide');
    if (switchBtn.classList.contains('slide')) {
        video.pause();
        const notification = document.createElement('h1');
        notification.textContent = 'Paused';
        header.append(notification);
    } else {
        const notification = document.querySelector('header h1');
        notification.remove();
        video.play();
    }
});
