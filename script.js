function startProgressBarAnimations() {
    const htmlProgress  = 85;
    const cssProgress  = 78;
    const golangProgress  = 60;
    const jsProgress  = 60;

    document.getElementById('html-progress').style.width = htmlProgress + '%';
    document.getElementById('css-progress').style.width = cssProgress + '%';
    document.getElementById('golang-progress').style.width = golangProgress + '%';
    document.getElementById('js-progress').style.width = jsProgress + '%';

    const htmlProgressBar = document.getElementById('html-progress');
    const cssProgressBar = document.getElementById('css-progress');
    const golangProgressBar = document.getElementById('golang-progress');
    const jsProgressBar = document.getElementById('js-progress');

    const trigger = htmlProgressBar.offsetWidth;
    htmlProgressBar.style.width = htmlProgressBar.getAttribute('data-progress') + '%';
    cssProgressBar.style.width = cssProgressBar.getAttribute('data-progress') + '%';
    golangProgressBar.style.width = golangProgressBar.getAttribute('data-progress') + '%';
    jsProgressBar.style.width = jsProgressBar.getAttribute('data-progress') + '%';
}

window.addEventListener('load', startProgressBarAnimations);