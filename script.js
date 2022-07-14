const startBtn = document.getElementById("start");
let question = $("#question");
var value_array = [];

//***** Hides Start button and displays quiz *****

$(".startBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizQuestionsContainer").style.display = "block";
    renderQuestion();
});

// ***** Questions Array ****
let currentQuestion = {}
let availableQuestions = []
let genres = ['horror', 'comedy', 'documentary', 'drama', 
    'family', 'fantasy', 'history', 'mystery', 'sci-fi', 'thriller']
let years = ['2010', '2000', '1990', '1980', '1970', '1960', '1950', '1940', '1930', '1920', '1910', '1900']
let MPAA = ['G', 'PG', 'PG-13', 'R']
let option = []
let questions = [
    {
        question: 'What genre would you be interested in?', 
        option: genres 
    },

    { 
        question: 'Are you interested in a certain age of movies?',
        option: years
    },
       
    {
        question: 'Select all MPAA rating range G-R that you would like.',
        option: MPAA,
    }

] // end questions array
   
//***** Next button *****
$('.next').click(function(event){ 
event.stopPropagation();
event.preventDefault();

    if (runnungQuestion < questions.length - 1){
        runnungQuestion++;
        renderQuestion();
    }
    else {
        document.getElementById("quizQuestionsContainer").style.display = "none";
        //TODO collect quiz responses (value_array) here
        console.log(value_array);
    }
 })

//***** Shows Question to html *****
 const lastQuestion = questions.length - 1;
 let runnungQuestion = 0;

function renderQuestion(){
    question.empty();
    //console.log('we are here');
    let q = questions[runnungQuestion];
    question.append(q.question);
     question.innerHTML = "<p>" + q.question + "</p>";
 // end renderQuestion
 
//***** */ Create an html parent element to hold all the checkboxes *****
var parent = $("<div>")

//***** */ inside the forEach loop create a checkbox for the curent option and add it to the parent element *****
    q.option.forEach(function(option){     
    $('<input />', { type: 'checkbox', id: 'cb'+option, value: option }).appendTo(parent);
    $('<label />', { 'for': 'cb'+option, text: option }).appendTo(parent);

    });
    question.append(parent);
}
//***** gets value from check boxes *****
 $(document).ready(function() {
     value_array = [];
    
     $(document).on("change", "input[type='checkbox']", function() {
         var $this = $(this),
            value = $this.val();
    
         value_array.push( value );
    
    });
    });
