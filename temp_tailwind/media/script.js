document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('navbar-toggle');
    const searchButton = document.getElementById('search-toggle');
    const menu = document.getElementById('navbar-search');

    searchButton.addEventListener('click', function (){
        menu.classList.toggle('hidden');
    });

    button.addEventListener('click', function () {
        menu.classList.toggle('hidden');
    });
});