var select_field=document.getElementById('select_field');
var select_text=document.getElementById('select_text');
var options=document.getElementsByClassName('options');
var list=document.getElementById('list');
var arrow_icon=document.getElementById('arrow_icon');

select_field.onclick = function(){
    list.classList.toggle('hide');
    arrow_icon.classList.toggle("rotate");
} 

for(option of options ){
    option.onclick = function(){
        select_text.innerHTML=this.textContent;
        list.classList.toggle('hide');
        arrow_icon.classList.toggle("rotate");
    }
}