const wrapper=document.querySelector('.wrapper');
const login_link=document.querySelector('.login');
const register_link=document.querySelector('.register');
const btn_popup=document.querySelector('.login_btn');
const close_icon=document.querySelector('.close_icon')

register_link.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

login_link.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btn_popup.addEventListener('click',()=>{
    wrapper.classList.add('active_popup');
});

close_icon.addEventListener('click',()=>{
    wrapper.classList.remove('active_popup');
});