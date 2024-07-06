let hrs=document.getElementById('hrs');
let mins=document.getElementById('mins');
let secs=document.getElementById('secs');

setInterval(()=>{
    let current_time=new Date();
    hrs.innerHTML=(current_time.getHours()<10?'0':'')+current_time.getHours();
    mins.innerHTML=(current_time.getMinutes()<10?'0':'')+current_time.getMinutes();
    secs.innerHTML=(current_time.getSeconds()<10?'0':'')+current_time.getSeconds();
},1000);