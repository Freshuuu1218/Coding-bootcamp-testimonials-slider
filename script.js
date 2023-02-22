const tanyaImg = document.querySelector('#tanya-img');
const tanyaSlide = document.querySelector('.slideOne');
const johnImg = document.querySelector('#john-img');
const johnSlide = document.querySelector('.slideTwo');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

next.addEventListener('click',()=>{
    tanyaImg.classList.add('vanish');
    tanyaSlide.classList.add('vanish');
    johnImg.classList.remove('vanish');
    johnSlide.classList.remove('vanish');
    next.style.opacity = .5;
    prev.style.opacity = 1;
    johnImg.opacity = 1;
})
prev.addEventListener('click',()=>{
    tanyaImg.classList.remove('vanish');
    tanyaSlide.classList.remove('vanish');
    johnImg.classList.add('vanish');
    johnSlide.classList.add('vanish');
    next.style.opacity = 1;
    prev.style.opacity = .5;
})