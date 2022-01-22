const logo = document.getElementById('logo');
const switchButton = document.getElementById('switch');
const theme = document.getElementById('theme');

theme.ariaLabel = 'claro';

switchButton.addEventListener('click', () => {

    if (theme.ariaLabel == 'claro') {
        theme.ariaLabel = 'dark';
        theme.href = '../css/templates/dark.css';
        logo.src = '../img/logos/Imagotipo_Light.png';
    } else {
        theme.ariaLabel = 'claro';
        theme.href = '../css/templates/light.css';
        logo.src = '../img/logos/Imagotipo_Dark.png';
    }

});