var responsive = document.querySelector('.responsive i');
var menu = document.querySelector('.menu');
console.log(responsive);

responsive.addEventListener('click', function() {
    menu.classList.toggle("menu-responsive");
    menu.classList.remove('flex-container');
    menu.classList.toggle('menu');
})