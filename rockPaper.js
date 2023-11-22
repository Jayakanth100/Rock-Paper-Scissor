function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3); 
    const options = ["rock", "paper", "scissors"];
    return options[randomIndex];
}
//global variables
var pp = 0;
var cp = 0; 
const playerRes = document.getElementById("player");
const compRes  = document.getElementById("computer");
const resultDiv = document.getElementById('resDiv');
//Initializing points to zero 
playerRes.innerText = 0;
compRes.innerText = 0;
//toggleResBorder();

function toggleResBorder(){
    if(resultDiv.content.trim() === ''){
        resultDiv.style.border = 'none';
    }else{
        resultDiv.style.border = "1px solid res";
    }
    
}

function main(){
    if(pp == 5 || cp == 5){
        if(pp == 5){
            playerRes.innerText = pp;
            cp = 0;
            pp = 0;
            alert("Congratulation Human won"); 
        }
        else if(cp == 5){
            compRes.innerText = cp;
            pp = 0;
            cp = 0;
            alert("Oops Computer beats you");
        }
        resultDiv.innerHTML = "";
        playerRes.innerText = 0;
        compRes.innerText = 0;
        toggleResBorder();
    }
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
        pp += 1;
    }
    else{
        result = `You Lose! ${ccStatus} beats ${pcStatus}`;
        cp += 1;
    }
    
    return result;
}

const btns = document.getElementsByClassName("btn");
Array.from(btns).forEach(function(button){
    button.addEventListener("click",playerChoice);
});

function playerChoice(e){
    const pc = e.target.value;
    const cc = getComputerChoice();

    resultDiv.innerHTML = playRound(pc, cc);
    document.body.appendChild(resultDiv);

    showResult(pp,cp);
    main();
}

function showResult(pp,cp){
    playerRes.innerText = pp;
    compRes.innerText = cp;
}






