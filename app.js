let userScore=0;
let compScore=0;


const choises=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const showWinner=(userWin, userChoice, compChoice) => {
  if(userWin){
    console.log("You Win ");
    msg.innerText=`You Win!  Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore;
  }  
  else{
    console.log("You Lose");
    msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    compScorePara.innerText=compScore;
  }
}


const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="blue";
}

const genComChoice=() => {
    const options=["rock", "paper", "scissors"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
}
 
const playGame=(userChoice)=>{
console.log("user choice=", userChoice);
//Generate computer choice

const compChoice=genComChoice();
console.log("computer  choice=", compChoice);

if(userChoice=== compChoice){
    //DrawGame
drawGame();

}
else{
let userWin=true;
if(userChoice==="rock"){
    //scissors paper
userWin= compChoice==="paper"?false:true

}
else if(userChoice==="paper"){
//rock scissors
userWin=compChoice==="scissors"?false:true;


}
else{
    //rock paper

   userWin= compChoice==="rock"?false:true;
}


showWinner(userWin, userChoice, compChoice);

}



};

choises.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        
        const userChoice=choice.getAttribute("id");
     console.log("choice was clicked", userChoice);

playGame(userChoice);

    });
});

