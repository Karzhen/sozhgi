document.addEventListener("DOMContentLoaded", function() {
    const backgroundVideo = document.querySelector('.background-video'),
        main = document.querySelector('main');

    setTimeout(function() {
        const button = document.createElement('a');
        button.textContent = 'Перейти к товарам на маркетплейсе';
        button.href = 'https://ozon.ru/t/dEgNNnb';
        button.target = '_blank';

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        overlay.style.opacity = '0';
        button.style.opacity = '0';

        main.appendChild(overlay);
        main.appendChild(button);

        button.classList.add('modal-button');

        setTimeout(function() {
            overlay.style.opacity = '1';
            button.style.opacity = '1';
        }, 1000); // небольшая задержка
    }, 2000);
});