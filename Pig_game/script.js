'use strict';
//selecting the elements
const player0_el=document.querySelector('.player--0');
const player1_el=document.querySelector('.player--1');
const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const current_score0=document.querySelector('#current--0')
const current_score1=document.querySelector('#current--1')
const dice_el=document.querySelector('.dice');
const btn_new=document.querySelector('.btn--new');
const btn_roll=document.querySelector('.btn--roll');
const btn_hold=document.querySelector('.btn--hold');



let current_score,active_player,playing,scores;
//Initial conditions
const initial=function(){
    
    current_score=0;
    active_player=0;
    scores=[0,0];
    playing=true;

    score0.textContent=0;
    score1.textContent=0;
    current_score0.textContent=0;
    current_score1.textContent=0;

    dice_el.classList.add('hidden');

    player0_el.classList.remove('player--winner');
    player1_el.classList.remove('player--winner');
    player0_el.classList.add('player--active');
    player1_el.classList.remove('player--active');
}
initial();

const switch_player=function(){
    document.getElementById(`current--${active_player}`).textContent=0;
    current_score=0;
    active_player=active_player===0?1:0;
    //changing the active player visibility
    player0_el.classList.toggle('player--active');
    player1_el.classList.toggle('player--active');
};


//Rolling the dice
btn_roll.addEventListener('click',function(){
    if(playing){
        const dice=Math.trunc(Math.random()*6)+1

        dice_el.classList.remove('hidden');
        dice_el.src=`dice-${dice}.png`;
        
        if(dice!=1){
            current_score+=dice;
            document.getElementById(`current--${active_player}`).textContent=current_score;
        }
        //if the player get 1 then it changes the dice to th other player
        else{
            switch_player();
        }
    }

});

//When player wants to hold the score
btn_hold.addEventListener('click',function(){

    if(playing){
        scores[active_player]+=current_score
        document.getElementById(`score--${active_player}`).textContent=scores[active_player];
        
        if (scores[active_player]>=100){
            playing=false;
            dice_el.classList.add('hidden');
            document.querySelector(`.player--${active_player}`).classList.add('player--winner');
            document.querySelector(`.player--${active_player}`).classList.remove('player--active');
        }
        else{
            switch_player();
        }
    }
    
});

btn_new.addEventListener('click',initial);