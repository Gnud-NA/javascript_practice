var openBtn = document.querySelector('.open-btn');
var modalOverlay = document.querySelector('.modal-overlay'); 
var closeBtn = document.querySelector('.close-btn');   
var container = document.querySelector('.container');
openBtn.addEventListener('click', function() {
//    modalContent.classList.toggle('modal-content');
    modalOverlay.classList.remove('close-box');
})
closeBtn.addEventListener('click', ()=> {
    modalOverlay.classList.add('close-box');
})