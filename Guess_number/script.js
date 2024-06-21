'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="Correct number";
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// console.log(document.querySelector('.guess').value=23);

let secret_number=Math.trunc(Math.random()*20)+1;

let score=20;
let high_score=0;

document.querySelector('.number').textContent=secret_number;
document.querySelector('.check').addEventListener('click',
    function(){
        const guess=Number(document.querySelector('.guess').value);

        if(!guess){
            document.querySelector('.message').textContent='⛔No Number';
        }
        else if(guess===secret_number){
            document.querySelector('.message').textContent='🥳Correct Number';
            document.querySelector('.number').textContent=secret_number;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';

            if(score>high_score){
                high_score=score;
                document.querySelector('.highscore').textContent=high_score;
            }

        }
        else if(guess!==secret_number){
            if(guess>1){
                document.querySelector('.message').textContent=guess> secret_number?'Too High':'Too low';
                score--;
                document.querySelector('.score').textContent=score;
                }
                else{
                    document.querySelector('.message').textContent='😢You lost the game';
                document.querySelector('.score').textContent=0;
                }
        }
    }
);

document.querySelector('.again').addEventListener('click',function(){
    score=20
    secret_number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start Guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});