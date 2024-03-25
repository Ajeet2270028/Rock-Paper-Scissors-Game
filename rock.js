let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCopmChoice=()=>{
  const options=['Rock','Paper','Scissors'];
  let randindx=Math.floor(Math.random()*3);
  return options[randindx];
}
const matchDraw=()=>{
  //console.log("Match was Draw");
  msg.innerText="Match was Draw. Play Agains."
  msg.style.backgroundColor="black";
  msg.style.color="white"
}

const ShowWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
   // console.log("User Win!");
    msg.innerText=`User Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white"
    
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    //console.log("Computer Win!");
    msg.innerText=`Computer Win! ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="yellow";
    msg.style.color="red"
  }
}

const playGame=(userChoice)=>{
  console.log("user choice=",userChoice);
  const compChoice=genCopmChoice();
  console.log("computer choice=",compChoice);
  if(userChoice === compChoice){
    //console.log("Match Drow");
    matchDraw();
  }
  else{
    let userWin=true;
    if(userChoice==="Rock"){
      //paper scioors
      userWin=compChoice==="Paper"?false:true;
    }else if(userChoice=="Paper"){
      //rock scissor
      userWin=compChoice==="Scissors"?false:true;
    }
    else{
      //paper Scirrors
      userWin=compChoice==="Rock"?false:true;
    }
    ShowWinner(userWin ,userChoice,compChoice);
  }
}




choices.forEach((choice)=>{
  //console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    //console.log("choice was clicked",userChoice)
    playGame(userChoice);
  })
})