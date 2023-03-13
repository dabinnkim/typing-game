//1.사용자가 input에 입력한 값 가져오기
//2.사용자가 입력한 값과 랜덤으로 나온 값 비교해서 같으면 획득점수 +1


//획득점수 초기값
let score = 0;


const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');

//사용자가 입력한 input값-랜덤값 같으면 획득점수 +1
wordInput.addEventListener('input',()=>{
    if(wordInput.value.toLowerCase()===wordDisplay.innerText.toLowerCase()){
        score++
        scoreDisplay.innerText=score;
    }
})





