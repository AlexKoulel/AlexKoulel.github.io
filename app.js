var title = document.querySelector('title');
title.innerText = 'asdoij';

window.onblur = function() {
    title.innerText = 'Hey come back! 🤨';
}


window.onfocus = function() {
    title.innerText = 'Alexandros Koulelis';
}