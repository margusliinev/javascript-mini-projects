let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.counter-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = '#28a745';
        } else if (count < 0) {
            value.style.color = '#dc3545';
        } else {
            value.style.color = 'var(--colorBlack)';
        }
        value.textContent = count;
    });
});
