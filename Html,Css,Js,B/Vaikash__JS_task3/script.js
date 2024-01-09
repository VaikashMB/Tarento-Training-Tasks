const mavericksScore = document.getElementById("mavericksScore");
const downtownScore = document.getElementById("downtownScore");
const mavericksScoreBtn1 = document.getElementById("mavericksBtn1");
const downtownScoreBtn1 = document.getElementById("downtownBtn1");
const mavericksScoreBtn2 = document.getElementById("mavericksBtn2");
const downtownScoreBtn2 = document.getElementById("downtownBtn2");
const mavericksScoreBtn3 = document.getElementById("mavericksBtn3");
const downtownScoreBtn3 = document.getElementById("downtownBtn3");
const timer = document.getElementById("timer");
const winnerText = document.getElementById("winnerText");
const tieText = document.getElementById("tieText");


let mavericksScoreDefault = 0;
let downtownScoreDefault = 0;
let timerDefault = 15;


fetch('teamNames.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    teamNames = data.split('\n'); 
 
    
    const team1NameElement = document.getElementById('teamA');
    const team2NameElement = document.getElementById('teamB');
 
    if (teamNames.length >= 2) {
      team1NameElement.textContent = teamNames[0];
      team2NameElement.textContent = teamNames[1];
   
    
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });



mavericksScoreBtn1.addEventListener("click",() => {
    increaseScoreBy1("mavericks")
});

downtownScoreBtn1.addEventListener("click",() => {
    increaseScoreBy1("downtown")
});

function increaseScoreBy1(team){
    if(team==="mavericks"){
        mavericksScoreDefault++;
        mavericksScore.textContent = mavericksScoreDefault;
    }
    else if(team==="downtown"){
        downtownScoreDefault++;
        downtownScore.textContent = downtownScoreDefault;
    }

}



mavericksScoreBtn2.addEventListener("click",() => {
    increaseScoreBy2("mavericks")
});

downtownScoreBtn2.addEventListener("click",() => {
    increaseScoreBy2("downtown")
});

function increaseScoreBy2(team){
    if(team==="mavericks"){
        mavericksScoreDefault += 2;
        mavericksScore.textContent = mavericksScoreDefault;
    }
    else if(team==="downtown"){
        downtownScoreDefault += 2;
        downtownScore.textContent = downtownScoreDefault;
    }

}




mavericksScoreBtn3.addEventListener("click",() => {
    increaseScoreBy3("mavericks")
});

downtownScoreBtn3.addEventListener("click",() => {
    increaseScoreBy3("downtown")
});

function increaseScoreBy3(team){
    if(team==="mavericks"){
        mavericksScoreDefault += 3;
        mavericksScore.textContent = mavericksScoreDefault;
    }
    else if(team==="downtown"){
        downtownScoreDefault += 3;
        downtownScore.textContent = downtownScoreDefault;
    }

}


function timerUpdate(){
    timer.textContent = timerDefault;
    if(timerDefault=== 0){
        congratsWinner();
    }else{
        timerDefault--;
        setTimeout(timerUpdate,1000);
    }
}


function congratsWinner(){
    if(mavericksScoreDefault > downtownScoreDefault){
        winnerText.textContent = "Mavericks won the game!!!"
    }
    else if(mavericksScoreDefault < downtownScoreDefault){
        winnerText.textContent = "Downtown won the game!!!"
    }
    else{
        tieText.textContent = "It's a tie"
    }

    mavericksScoreBtn1.disabled = true;
    mavericksScoreBtn2.disabled = true;
    mavericksScoreBtn3.disabled = true;
    downtownScoreBtn1.disabled = true;
    downtownScoreBtn2.disabled = true;
    downtownScoreBtn3.disabled = true;
}
timerUpdate();

document.getElementById("new").addEventListener("click", newGameFunction);
function newGameFunction(){
    location.reload();
}
