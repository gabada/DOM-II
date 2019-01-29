// Your code goes here
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', e => {
    busImg.setAttribute('src', 'img/fire_s_bus.png')
});

const navBus = document.querySelector('.logo-heading');
window.addEventListener('scroll', e => {
    navBus.textContent = "Struggle Bus"
});

const welcomeText = document.querySelector('h2');
welcomeText.addEventListener('dblclick', e => {
    welcomeText.textContent = "Welcome to the STRUGGLE BUS!"
});

const adventureImg = document.querySelectorAll('.img-content img');
adventureImg[0].addEventListener('drag', e => {
    adventureImg[0].setAttribute('src', 'img/sad_face.jpg')
})

window.addEventListener('resize', e => {
    adventureImg[1].setAttribute('src', 'img/angry.jpg')
})

const secondSlide = document.querySelector('.content-destination img');
secondSlide.addEventListener('contextmenu', e => {
    secondSlide.setAttribute('src', 'img/alone.jpg')
})