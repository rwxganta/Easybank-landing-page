const body = document.body;
const hamburgerBtn = document.querySelector('.js__btn-menu');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    body.classList.toggle('hide-scroll');
});

overlay.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    body.classList.toggle('hide-scroll');
});