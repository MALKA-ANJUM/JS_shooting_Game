let round = document.getElementById('round');
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let shoot1 = document.querySelector('.shoot1')
let shoot2 = document.querySelector('.shoot2')
let scoreBoard = document.querySelector('.score-container');
let start = document.querySelector('.btn');
let gameContainer = document.querySelector('.game-container');
let prog1 = document.querySelector('#prog1');
let prog2 = document.querySelector('#prog2');
gameContainer.style.visibility = "hidden";
let rounds = 1;
let player1Health = 100;
let player2Health = 100;
let player1Result = 0;
let player2Result = 0;
let addCardHtml;
function addCard(){
    if(rounds < 5){
        if(player1Health <= 0){
            alert("Round " + rounds + " Won By Player 2");
            gameContainer.style.visibility = "hidden"
            ++rounds;
            ++player2Result;
            round.innerHTML = rounds;
            prog1.setAttribute("value",`100`);
            prog2.setAttribute("value",`100`);
            player1Health = 100;
            player2Health = 100;
        }if(player2Health <= 0){
            alert("Round " + rounds + " Won By Player 1");
            gameContainer.style.visibility = "hidden"
            ++rounds;
            ++player1Result;
            round.innerHTML = rounds;
            player1Health = 100;
            player2Health = 100;
            prog1.setAttribute("value",`100`);
            prog2.setAttribute("value",`100`);
        }
        addCardHtml = ` 
    <div class="score-card">
        <div class="heading"><p>Round ${rounds - 1} Result</p></div>
        <div class="card-body">
            <h2>Player 1 - Won: ${player1Result}</h2>
            <h2>Player 2 - Won: ${player2Result}</h2>
        </div>
    </div>`
    scoreBoard.insertAdjacentHTML("beforeend",addCardHtml)
    }else{
        if(player1Result > player2Result){
            alert("Player1 Won The Match")
            reload();
        }else if(player2Result > player1Result){
            alert("Player2 Won The Match");
            reload();
        }
    }
}
function reload(){
    history.go(0);
}
player1.onclick = () => {
    if(player2Health < 0){
        addCard();
    }else{
        shoot1.classList.toggle('shoot1');
        let damage = Math.floor(Math.random() * 5);
        player2Health -=  damage;
        prog2.setAttribute("value",`${player2Health}`);
    }
   
}

player2.onclick = () => {
    if(player1Health < 0){
        addCard();
    }else{
        shoot2.classList.toggle('shoot2');
        let damage = Math.floor(Math.random() * 5);
        player1Health -=  damage;
        prog1.setAttribute("value",`${player1Health}`);
    }
}

function startGame(){
    gameContainer.style.visibility = "hidden" ? "visible" : "hidden";
}






