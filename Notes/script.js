const notes_container=document.querySelector('.notes-container');
const create_btn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

function show_notes(){
    notes_container.innerHTML=localStorage.getItem('notes'); 
}

show_notes();

function update_storage(){
    localStorage.setItem('notes',notes_container.innerHTML);
}
create_btn.addEventListener('click',()=>{
    let input_box=document.createElement('p');
    let img=document.createElement('img');
    input_box.className="input-box";
    input_box.setAttribute("contenteditable",'true');
    img.src='delete.png';
    notes_container.appendChild(input_box).appendChild(img);
    update_storage();
});

notes_container.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        update_storage();
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.addEventListener('keyup', function() {
                update_storage();
            });
        });
    }
});

document.addEventListener('Keydown',Event=>{
    if(Event.key==='Enter'){
        document.execCommand('insertLineBreak');
        Event.preventDefault();
    }
})