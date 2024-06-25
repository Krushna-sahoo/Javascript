let password=document.getElementById('password');
let eye_icon=document.getElementById('eye_icon');

eye_icon.onclick= function(){
    if(password.type=='password'){
        password.type="text";
        eye_icon.src="eye-open.png";
    }else{
        password.type="password";
        eye_icon.src="eye-close.png";
    }
}