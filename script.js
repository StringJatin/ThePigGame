'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const NewBtn = document.querySelector('.btn--new');
const RollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let current = 0;
let player = 0;
let score = [0,0];

score0El.textContent = 0;
score1El.textContent = 0;

dice.classList.add('hidden');



RollBtn.addEventListener('click', function () {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNum);
    
    if (diceNum != 1) {
        dice.src = `dice-${diceNum}.png`;
        dice.classList.remove('hidden');
        current += diceNum;
        document.getElementById(`current--${player}`).textContent = current;
        
        
        if(score[player]>=100)
        {
               document.getElementById(`name--${player}`).textContent = `Player ${player} wins`;
        }
    }
    else {
        dice.src = `dice-1.png`;

        
        document.getElementById(`current--${player}`).textContent = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        player = player === 0 ? 1 : 0;
        current = 0;

    }
})
const reset = function(){
    document.getElementById('name--0').textContent = 'Player 0';
    document.getElementById('name--1').textContent = 'Player 1';
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    player = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    RollBtn.classList.remove('hidden');
    holdBtn.classList.remove('hidden');

}

holdBtn.addEventListener('click', function () {

    score[player] += current;
   if(score[player]>=100){
       document.getElementById(`name--${player}`).textContent = `player ${player} won`;
       RollBtn.classList.add('hidden');
       holdBtn.classList.add('hidden');
   }
    document.getElementById(`score--${player}`).textContent= score[player];
    dice.classList.add('hidden');
    document.getElementById(`current--${player}`).textContent = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    player = player === 0 ? 1 : 0;
    current = 0;
})
NewBtn.addEventListener('click' , reset);
