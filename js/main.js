//1.사용자가 input에 입력한 값 가져오기
//2.사용자가 입력한 값과 랜덤으로 나온 값 비교해서 같으면 획득점수 +1


//사용변수
let score = 0;
let time = 10; //타이핑 할 시간 9초
let isPlaying = false; //useSate 역할
let interval;
let checkInterval;
let words = []

const wordInput = document.querySelector('.word-input'); //사용자 input 값
const wordDisplay = document.querySelector('.word-display'); //랜덤 단어
const scoreDisplay = document.querySelector('.score'); //획득점수
const timeDisplay = document.querySelector('.time')//남은시간
const button = document.querySelector('.button');

//화면이 렌더링 되었을때 초기값 세팅
//1. word-display에 배열의 랜덤 요소 들어가기

init()

function init(){
    getWords();
    wordInput.addEventListener('input',wordMatch)//단어 일치
}


//단어 불러 오기
function getWords(){
    words = ['Hello','Banana','Apple','Cherry']
    buttonChange('게임시작')
    gameOver
}

//게임이 실행중인지 아닌지 실시간으로 확인
function gameOver(){
    if(time==0 && !isPlaying){
        buttonChange('게임종료/다시시작')
    }
}


//단어 일치 체크
function wordMatch(){
    if(wordInput.value.toLowerCase()===wordDisplay.innerText.toLowerCase()){
        wordInput.value=''//조건 맞을때 input창 초기화 시키기
        if(!isPlaying){ //return때문에 아래 코드들 실행 안돼서 획득점수 안올라감
            return
        }
        score++
        scoreDisplay.innerText=score; //증가된값을 획득점수에 update
        const randomIndex=Math.floor(Math.random() * words.length) //단어의 길이만큼 곱하면 그안에서 랜덤한 숫자 나옴
        wordDisplay.innerText=words[randomIndex]
    }
}


//버튼 누르면 실행하는 함수, onclick에 넣음
function run(){
    time=10; //카운트 3부터 다시
    scoreDisplay.innerText=0;//점수 0부터 다시
    wordInput.focus()//input에 자동으로 커서 생김
    interval = setInterval(countDown,1000);
    checkInterval = setInterval(gameOver,50)
    buttonChange('게임중')
}



//카운트다운 함수 -> time이 0 이상이면 1씩 감소
function countDown(){
    isPlaying=true
    time > 0 ? time -- : isPlaying=false;
    if(!isPlaying){
        clearInterval(interval)
    }
    console.log(time)
    timeDisplay.innerText=time; //남은시간에 넣어줌
}

//버튼 이름 바꾸기
function buttonChange(text){
    button.innerText = text //버튼이름 바꾸기
    //버튼이 게임 시작이면 클래스이름(loading) 지우기
    text==='게임시작'? button.classList.remove('loading') : button.classList.add('loading')
}










