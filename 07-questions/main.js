const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const questions = document.querySelectorAll('.question');
        questions.forEach(function (question) {
            if (question !== e.currentTarget.parentElement.parentElement) {
                question.classList.remove('show-text');
            } else {
                question.classList.toggle('show-text');
            }
        });
    });
});
