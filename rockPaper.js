function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); 
    const options = ["rock", "paper", "scissors"];
    return options[randomIndex];
}

function getPlayerChoice(){
    const choice = prompt("Enter your choice: ");
    return choice;
}

function playRound(pc,cc){
    let result;
    let pcStatus = pc.charAt(0).toUpperCase()+pc.slice(1);
    let ccStatus = cc.charAt(0).toUpperCase()+cc.slice(1); 

    if(pc == cc){
        result = "Tie";
    }
    else if((pc == "paper" && cc == "rock") || (pc == "rock" && cc == "scissors") || (pc == "scissors" && cc == "paper")){
        result = `You Won! ${pcStatus} beats ${ccStatus}`;
    }
    else{
        result = `You Lose! ${ccStatus} beats ${pcStatus}`;
    }
    return result;
}

let pc = getPlayerChoice();
pc = pc.toLowerCase();
let cc = getComputerChoice();
console.log(playRound(pc, cc));


