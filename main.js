//랜덤번호 지정
//유저가 번호를 입력한다 그리고 실행 버튼을 누름
//만약에 맞추면 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다(버튼 클릭 불가)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//이미 입력한 숫자를 또 입력하면, 알려준다, 기뢰를 깎지 않는다. 

let randomNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let startButton = document.getElementById("start-button")
let chance = 5;
let gameover =false;
let history = [];
let historyArea = document.getElementById("history-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
startButton.addEventListener("click",start);

function start(){
    playButton.disabled = false;
    resetButton.disabled = false;
    startButton.disabled = true;
    userInput.disabled = false;
    resultArea.textContent = "숫자를 입력해주세요."
}

function pickNumber(){
    randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}

function play(){
    let userValue = userInput.value;
    startButton.disabled = true;
    userInput.value = "";

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1부터 100까지의 숫자만 입력하세요.";
        return;
    }
    
    console.log(userValue);
    
    if(history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }
    chance --;
    chanceArea.textContent=`남은 기회 : ${chance}번`
    if(userValue < randomNumber){
        resultArea.textContent="UP";
    } else if(userValue > randomNumber){
        resultArea.textContent="DOWN";
    } else{
        resultArea.textContent="정답입니다";
        gameover = true;
    }

    history.push(userValue);
    historyArea.textContent= `입력한 숫자 : ${history}`;

    if(chance < 1){
        gameover = true;
    } 
    if(gameover == true){
        playButton.disabled = true;
    }

}

function reset(){
    userInput.textContent ="";
    chanceArea.textContent = "남은 기회 : 5번";
    historyArea.textContent = "입력한 숫자 :";
    resultArea.textContent = "시작을 눌러주세요."
    pickNumber();
    playButton.disabled = true;
    resetButton.disabled = true;
    startButton.disabled = false;
    userInput.disabled = true;
}


pickNumber();