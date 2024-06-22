'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const close_modal=document.querySelector('.close-modal');
const show_modal=document.querySelectorAll('.show-modal');


const openModal=function(){
    modal.classList.remove('hidden');
       overlay.classList.remove('hidden'); 
};

for (let i=0;i<show_modal.length;i++){
    show_modal[i].addEventListener('click',openModal);
}

const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
close_modal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);


document.addEventListener('keydown',function(e){
    console.log(e.key);
    if (e.key==='Escape' && !modal.classList.contains('hidden')){
        closeModal();        
    }
});