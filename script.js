let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let menu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click',()=>{
    menu.style.display = 'flex'
})
closeIcon.addEventListener('click',()=>{
    menu.style.display = 'none';
})