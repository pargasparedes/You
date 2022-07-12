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
let genres = ['horror', 'comedy', 'documentary', 'drama',]
let years = ['2010', '2000',]
let questions = [
    {
        question: 'What genre would you be interested in?', 
        options: genres 
    },

    { 
        question: 'Are you interested in a certain age of movies?',
        options: years
    },
       
    {
        question: 'Select all MPAA rating range G-R that you would like.'
    },
]
   
//***** Next button *****
$('.next').click(function(){ 
   
    
    //console.log("NEXT QUESTION");
 })

//***** Shows Question to html *****
const lastQuestion = questions.length - 1;
let runnungQuestion = 0;

function renderQuestion(){
    let q = questions[runnungQuestion];
    
     question.innerHTML = "<p>" + q.question + "</p>";
     // todo:
     // 1. Create an html parent element to hold all the checkboxes
     var parent = document.createElement("div");
     // 2. inside the forEach loop createa checkbox for the curent option and add it to the parent element
        q.options.forEach(function(options){
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = options;
            checkbox.name = "question";
            checkbox.id = options;
            parent.appendChild(checkbox);
            var label = document.createElement("label");
            label.htmlFor = options;
            label.appendChild(document.createTextNode(options));
            parent.appendChild(label);
     // 3. After ( outside ) of the forEach loop append the parent element to the question elemnent
            question.appendChild(parent);
     // possible next actions:
     // 1. might need event handlers and delegates
     // 2. storing user selection for easy access
    //  q.options.forEach(option => {
    //     console.log('Current option for which we need to create a checkbox! ',option)
    // }); 

//}
renderQuestion();
}); // end of renderQuestion()
}
