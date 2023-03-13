//1.사용자가 input에 입력한 값 가져오기
//2.사용자가 입력한 값과 랜덤으로 나온 값 비교해서 같으면 획득점수 +1


//사용변수
let score = 0;
let time = 3; //타이핑 할 시간 9초
let isPlaying = true; //useSate 역할
let interval;

const wordInput = document.querySelector('.word-input'); //사용자 input 값
const wordDisplay = document.querySelector('.word-display'); //랜덤 단어
const scoreDisplay = document.querySelector('.score'); //획득점수
const timeDisplay = document.querySelector('.time')//남은시간
const button = document.querySelector('.button');

//사용자가 입력한 input값-랜덤값 같으면 획득점수 +1
wordInput.addEventListener('input',()=>{
    if(wordInput.value.toLowerCase()===wordDisplay.innerText.toLowerCase()){
        score++
        scoreDisplay.innerText=score; //증가된값을 획득점수에 update
        wordInput.value=''//조건 맞을때 input창 초기화 시키기
    }
})

buttonChange('게임시작')

//button onclick 함수
//버튼 누르면 카운트함수 1초에 한번씩 실행
function run(){
    time=3; //버튼 누를때마다 카운트 다시 되어야함
    interval = setInterval(countDown,1000);    
}


//카운트다운 함수 -> time이 0 이상이면 1씩 감소
function countDown(){
    time > 0 ? time -- : clearInterval(interval);
    //isPlaying=flase이면 interval 함수 stop
    // if(!isPlaying){
    //     clearInterval(interval)
    // }
    console.log(time)
    timeDisplay.innerText=time; //남은시간에 넣어줌
}

//버튼 이름 바꾸기
function buttonChange(text){
    button.innerText = text //버튼이름 바꾸기
    //버튼이 게임 시작이면 클래스이름(loading) 지우기
    text==='게임시작'? button.classList.remove('loading') : button.classList.add('loading')
}










