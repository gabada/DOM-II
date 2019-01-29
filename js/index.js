// Your code goes here
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', e => {
    busImg.setAttribute('src', 'img/fire_s_bus.png')
});

const navBus = document.querySelector('.logo-heading');
console.log(navBus);
window.addEventListener('scroll', e => {
    navBus.textContent = "Struggle Bus"
});