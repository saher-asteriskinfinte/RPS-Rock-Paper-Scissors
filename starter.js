// let userScore=document.querySelector("#user-score");
// let compScore=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("win");
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Loose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("lose");
    }
}
const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const playGame=(userChoice)=>{
console.log(userChoice);
// generating computer choice
const compChoice=genCompChoice();
console.log(compChoice);
// checking who is the winner
if(userChoice===compChoice){
    msg.innerText="Game was drawn";
    msg.style.backgroundColor="#081b31"
}
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
           userWin= compChoice==="scissors"?false:true;
        }
        else{
            // userChoice=scissors
            // choices computer is being left:paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
})
})
