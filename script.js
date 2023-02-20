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
})
prev.addEventListener('click',()=>{
    tanyaImg.classList.remove('vanish');
    tanyaSlide.classList.remove('vanish');
    johnImg.classList.add('vanish');
    johnSlide.classList.add('vanish');
})