console.log("quiz app console");
const questionBank  = [
    {
        number : 1,
        question : "What is CSS?",
        option1 : "Cascading Style Sheets",
        option2 : "Cascading Sheet Styles",
        option3 : "Cascading Shower Sheets",
        option4 : "Cascading Shower Styles",
        solution : "ans1"
    },
    {
        number : 2,
        question : "What is the full form of JS",
        option1 : "Javascripter",
        option2 : "Javscript",
        option3 : "Typescript",
        option4 : "Java Syntax",
        solution : "ans2"
    },
    {
        number : 3,
        question : "What is Raect JS?",
        option1 : "HTML Framework",
        option2 : "CSS Framework",
        option3 : "Database",
        option4 : "Javascript Framework",
        solution : "ans4"
    },
    {
        number : 4,
        question : "What is Bootstrap",
        option1 : "HTML Framework",
        option2 : "CSS Framework",
        option3 : "Database",
        option4 : "Javascript Framework",
        solution : "ans2"
    }
]

var finalCheck = true;
let score = 0;
let question = document.getElementById("question");
let questionNumber = document.getElementById("questionNumber");
let submit = document.getElementById("submit");
// console.log(submit);
let number = 0;
let  optInput1 = document.getElementById('ans1');
let  optInput2 = document.getElementById('ans2');
let  optInput3 = document.getElementById('ans3');
let  optInput4 = document.getElementById('ans4');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let trueBtn = questionBank[number].solution;
let marks = 0;

let next = document.getElementById("next");
let prev = document.getElementById("prev");


window.addEventListener('DOMContentLoaded', function quizer(){
    // console.log("widnow loaded");
    quizApp(number);    
})

const verify = (check)=>{
    if(trueBtn === check ){
        // console.log(check);
       return true;
    }   
    else{
        return false;
    }
}

const quizApp = (number) =>{
    console.log("program iin here");
    question.innerHTML = questionBank[number].question;
    opt1.innerHTML = questionBank[number].option1;
    opt2.innerHTML = questionBank[number].option2;
    opt3.innerHTML = questionBank[number].option3;
    opt4.innerHTML = questionBank[number].option4;  
}

    var radios = document.querySelectorAll('input[type=radio][name="opt1"]');
    radios.forEach(radio => radio.addEventListener('change', () => 
    {
        let check = radio.id;
        // console.log(check);
        var checking =  verify(check);
        // console.log(checking);
        finalCheck = checking;
        unCheck(radio);
    }));
    function unCheck(radio){
    radio.checked = false;
 }
next.addEventListener(('click'),()=>{
    if(finalCheck === true){
        score ++;
        // console.log(score);
        questionNumber.innerHTML = questionBank[number].number;   
        console.log(questionNumber);
    }
    if(number < questionBank.length){
        number++;
        quizApp(number);
        // console.log(score);
        questionNumber.innerHTML = questionBank[number].number;
        console.log(questionNumber);
    }
})
