// Your code goes here
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', e => {
    busImg.setAttribute('src', 'img/fire_s_bus.png')
});


const navBus = document.querySelector('.logo-heading');
const headers = document.getElementsByTagName('h2');
window.addEventListener('scroll', e => {
    navBus.textContent = "Struggle Bus"
    headers[1].textContent = "STRUGGLE!"
    headers[2].textContent = "STRUGGLE!"
    headers[3].textContent = "STRUGGLE!"
    TweenMax.to(busImg, 1,{rotation:180});
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
    TweenMax.to(adventureImg[1], 1,{rotation:90});
    TweenMax.to(adventureImg[0], 1,{rotation:-90});
})

const secondSlide = document.querySelector('.content-destination img');
secondSlide.addEventListener('contextmenu', e => {
    secondSlide.setAttribute('src', 'img/alone.jpg')
    e.stopPropagation();
})

const signUpBtn = document.querySelectorAll('.btn');
signUpBtn[0].addEventListener('copy', e => {
    signUpBtn[0].textContent = "Don't do it!"
    signUpBtn[0].style.backgroundColor = 'red'
    signUpBtn[0].style.color = 'black'
    TweenMax.to(signUpBtn[0], 1,{rotation:180});
    TweenMax.to(signUpBtn[2], 1,{rotation:-180});
})

signUpBtn[1].addEventListener('paste', e => {
    signUpBtn[1].textContent = "If you do..."
    signUpBtn[1].style.backgroundColor = 'black'
    signUpBtn[1].style.color = 'red'
})

signUpBtn[2].addEventListener('cut', e => {
    signUpBtn[2].textContent = "you will STRUGGLE!!"
    signUpBtn[2].style.backgroundColor = 'red'
    signUpBtn[2].style.color = 'black'
    TweenMax.to(e.currentTarget, 1,{rotation:360});
    TweenMax.to(e.currentTarget, 2, {
        width: 500,
        ease:Bounce.easeOut
    });

})

const aLink = document.querySelectorAll('.nav a');
    aLink[0].addEventListener('mousemove', e => {
    aLink[0].style.color = 'red'
    aLink[2].style.color = 'red'
    // Stop refreshing page
    e.preventDefault();
})

const container = document.querySelector('.home');
    container.addEventListener('contextmenu', e => {
        container.style.backgroundColor = "darkred";
        TweenMax.to(container, 1,{rotation:-180});
        container.textContent = "YOU STRUGGLED ENOUGH!! GAME OVER!"
        container.style.color = "red";
        container.style.backgroundColor = "black";
        container.style.fontSize = "150px";
    })