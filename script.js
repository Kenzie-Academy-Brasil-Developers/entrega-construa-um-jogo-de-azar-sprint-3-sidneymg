const bodyVar = document.getElementById("bodyStyle")
const pedraOption = document.getElementById("optionPedra");
const papelOption = document.getElementById("optionPapel");
const tesouraOption = document.getElementById("optionTesoura");
let playerChoice = 0;
let siteChoice = 0;
let inWriteSiteChoice = "";
let result = "";
const resultSpace = document.getElementById("resultSpace")
let playerScore = 0;
let siteScore = 0;


pedraOption.addEventListener("click", function() {
    playerChoice = 1;
    randomChoice();
    whoWins();
    showResult();
    console.log(result);
    console.log(playerChoice);
    console.log(siteChoice);
})

papelOption.addEventListener("click", function(){
    playerChoice = 2;
    randomChoice();
    whoWins();
    showResult();
    console.log(result);
    console.log(playerChoice);
    console.log(siteChoice);
})

tesouraOption.addEventListener("click", function() {
    playerChoice = 3;
    randomChoice();
    whoWins();
    showResult();
    console.log(result);
    console.log(playerChoice);
    console.log(siteChoice);
})

// Site faz uma escolha aleatória como oponente

function randomChoice() {
    siteChoice = Math.floor(Math.random() * 3 + 1)
    if (siteChoice === 1) {
        return inWriteSiteChoice = "Pedra";
    }
    if (siteChoice === 2) {
        return inWriteSiteChoice = "Papel";
    }
    return inWriteSiteChoice = "Tesoura";
}

function whoWins() {
    if (playerChoice === siteChoice) {
        return result = "Empate";
    }
    if (playerChoice === 1 && siteChoice === 3) {
        return result = "Ganhou";
    }
    if (playerChoice === 3 && siteChoice === 1) {
        return result = "Perdeu"
    }
    if (playerChoice > siteChoice) {
        return result = "Ganhou"
    }
    return result = "Perdeu"
}


function showResult() {
    if (result === "Ganhou") {
        playerScore += 1;
    }
    if (result === "Perdeu") {
        siteScore += 1;
    }
    

    resultSpace.innerText = `Você ${playerScore}    X    ${siteScore} Site`;
    const titleSitePlay = document.createElement("h2");
    titleSitePlay.innerText = `Jogada do seu adversário: ${inWriteSiteChoice}`;
    const victoryOrTieOrDefeat = document.createElement("p");
    if (result === "Empate") {
        victoryOrTieOrDefeat.innerText = `Deu empate!	 Tente novamente!`;
    }
    if (result === "Perdeu") {
        victoryOrTieOrDefeat.innerText = `Você perdeu!   Tente novamente!`;
    }
    if (result === "Ganhou") {
        victoryOrTieOrDefeat.innerText = `Você venceu!  Parabéns!`;
    }

    
    resultSpace.appendChild(titleSitePlay);
    resultSpace.appendChild(victoryOrTieOrDefeat);
    if (result === "Ganhou") {
        victoryOrTieOrDefeat.style.color = "green";
    }
    if (result === "Perdeu") {
        victoryOrTieOrDefeat.style.color = "red";
    }
    if (result === "Empate") {
        victoryOrTieOrDefeat.style.color = "yellow";
    }
    
}