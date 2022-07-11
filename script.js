const startBtn = document.getElementById("start");
let question = document.getElementById("question");
const next = document.getElementById('next')[0];

//  class Question {
//      constructor(question, choices){
//          this.question = question;
//          this.choices = choices;
//          console.log(choices);
//      }
    
//  }
//***** Hides Start button and displays quiz ***** 
$(".startBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizQuestionsContainer").style.display = "block";
    // setNextQuestion()
});
// ***** Questions Array *****
let currentQuestion = {}
let availableQuestions = []
let questions = [
    {
        question: 'What genre would you be interested in?'
    },

    { 
        question: 'Are you interested in a certain age of movies?'
    },
       
    {
        question: 'Select all MPAA rating range G-R that you would like.'
    },
        
]
//***** Next button *****
 $('.next').click(function(){ 

    console.log("NEXT QUESTION");
 })

//***** Shows Question to html *****
const lastQuestion = questions.length - 1;
let runnungQuestion = 0;

function renderQuestion(){
    let q = questions[runnungQuestion];

     question.innerHTML = "<p>" + q.question + "</p>";
}
renderQuestion();

