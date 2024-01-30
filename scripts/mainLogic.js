document.addEventListener("DOMContentLoaded", function() {
    const backgroundVideo = document.querySelector('.background-video'),
        main = document.querySelector('main');

    setTimeout(function() {
        const button = document.querySelector('.modal-button');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        overlay.style.opacity = '0';

        main.appendChild(overlay);
        button.style.display = 'block';

        setTimeout(function() {
            overlay.style.opacity = '1';
            button.style.opacity = '1';
        }, 1000); // небольшая задержка
    }, 5000);
});