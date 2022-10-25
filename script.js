// Start button hide and questions appear
$("#button-78").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("button-77").style.display = "none";
  document.getElementById("quizQuestionsContainer").style.display = "block";
  renderQuestion();
});

// Hiding middle section to show top 10 list
$("#topTwoFifty").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("movie-details-container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("mostPopular").style.display = "none";
  document.getElementById("boxOffice").style.display = "none";
  document.getElementById("inTheaters").style.display = "none";
  document.getElementById("temporary").style.display = "block";
});

// Hiding middle section to show Most Popular list
$("#mostPopularBtn").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("movie-details-container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("temporary").style.display = "none";
  document.getElementById("boxOffice").style.display = "none";
  document.getElementById("inTheaters").style.display = "none";
  document.getElementById("mostPopular").style.display = "block";
  document.getElementById("pupularList").style.display = "grid";
});

// Hiding middle section to show In Theaters list
$("#boxOfficeBtn").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("movie-details-container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("temporary").style.display = "none";
  document.getElementById("mostPopular").style.display = "none";
  document.getElementById("inTheaters").style.display = "none";
  document.getElementById("boxOffice").style.display = "block";
});

// Hiding middle section to show Box Office list
$("#inTheatersBtn").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("movie-details-container").style.display = "none";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("temporary").style.display = "none";
  document.getElementById("mostPopular").style.display = "none";
  document.getElementById("boxOffice").style.display = "none";
  document.getElementById("inTheaters").style.display = "block";
});

$("#button-77").click(function () {
  document.getElementById("button-78").style.display = "none";
  document.getElementById("movie-details-container").style.display = "flex";
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("mostPopular").style.display = "none";
  document.getElementById("boxOffice").style.display = "none";
  document.getElementById("inTheaters").style.display = "none";
  document.getElementById("temporary").style.display = "none";

  const lastUrl = localStorage.getItem('myURL');
  console.log(lastUrl);
  getMovie();
});

// $("#button-77").click(function () {
//   const lastUrl = localStorage.getItem('myURL');
//   console.log(lastUrl);
//   getMovie(lastUrl);
// });

// -------Top 10 SlideShow Function and API calls for them-------- Start
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  fetch("https://imdb-api.com/en/API/Top250Movies/k_u0gzcze1", {
    cache: "force-cache",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#firstMovie").attr("src", data.items[0].image);
      $("#secondMovie").attr("src", data.items[1].image);
      $("#thirdMovie").attr("src", data.items[2].image);
      $("#fourthMovie").attr("src", data.items[3].image);
      $("#fifthMovie").attr("src", data.items[4].image);
      $("#sixthMovie").attr("src", data.items[5].image);
      $("#seventhMovie").attr("src", data.items[6].image);
      $("#eighthMovie").attr("src", data.items[7].image);
      $("#ninethMovie").attr("src", data.items[8].image);
      $("#tenthMovie").attr("src", data.items[9].image);
      $("#eleventhMovie").attr("src", data.items[10].image);
      $("#twelfthMovie").attr("src", data.items[11].image);
      $("#thirteenMovie").attr("src", data.items[12].image);
      $("#fourteenMovie").attr("src", data.items[13].image);
      $("#fifteenMovie").attr("src", data.items[14].image);
      $("#sixteenMovie").attr("src", data.items[15].image);
      $("#seventeenMovie").attr("src", data.items[16].image);
      $("#eighteenMovie").attr("src", data.items[17].image);
      $("#nineteenMovie").attr("src", data.items[18].image);
      $("#twenthMovie").attr("src", data.items[19].image);
      $("#twentyFirstMovie").attr("src", data.items[20].image);
      $("#twentySecMovie").attr("src", data.items[21].image);
      $("#twentyThirdMovie").attr("src", data.items[22].image);
      $("#twentyFourthMovie").attr("src", data.items[23].image);
      $("#twentyFifthMovie").attr("src", data.items[24].image);
    });

  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < 25; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "flex";
  circles[slidePosition - 1].className += " enable";
}
// -------Top 10 SlideShow Function and API calls for them-------- End

// -------Most Popular API Call and function to send titles to list-------- Start
fetch("https://imdb-api.com/en/API/MostPopularMovies/k_u0gzcze1", {
  cache: "force-cache",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    $("#firstMoviePopular").attr("src", data.items[0].image);
    $("#secondMoviePopular").attr("src", data.items[1].image);
    $("#thirdMoviePopular").attr("src", data.items[2].image);
    $("#fourthMoviePopular").attr("src", data.items[3].image);
    $("#fifthMoviePopular").attr("src", data.items[4].image);
    $("#sixthMoviePopular").attr("src", data.items[5].image);
    $("#seventhMoviePopular").attr("src", data.items[6].image);
    $("#eigthMoviePopular").attr("src", data.items[7].image);
    $("#ninethMoviePopular").attr("src", data.items[8].image);
    $("#tenthMoviePopular").attr("src", data.items[9].image);
  });
// -------Most Popular API Call and function to send titles to list-------- End

// -------In Theaters API Call and function to send titles to list-------- Start
fetch("https://imdb-api.com/en/API/InTheaters/k_u0gzcze1", {
  cache: "force-cache",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    $("#firstMovieTheaters").text(data.items[0].title);
    $("#secondMovieTheaters").text(data.items[1].title);
    $("#thirdMovieTheaters").text(data.items[2].title);
    $("#fourthMovieTheaters").text(data.items[3].title);
    $("#fifthMovieTheaters").text(data.items[4].title);
    $("#sixthMovieTheaters").text(data.items[5].title);
    $("#seventhMovieTheaters").text(data.items[6].title);
    $("#eigthMovieTheaters").text(data.items[7].title);
    $("#ninethMovieTheaters").text(data.items[8].title);
    $("#tenthMovieTheaters").text(data.items[9].title);
  });
// -------In Theaters API Call and function to send titles to list-------- End

// -------Box Office API Call and function to send titles to list-------- Start
fetch("https://imdb-api.com/en/API/BoxOffice/k_u0gzcze1", {
  cache: "force-cache",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    $("#firstBoxOffice").text(data.items[0].title);
    $("#secondBoxOffice").text(data.items[1].title);
    $("#thirdBoxOffice").text(data.items[2].title);
    $("#fourthBoxOffice").text(data.items[3].title);
    $("#fifthBoxOffice").text(data.items[4].title);
    $("#sixthBoxOffice").text(data.items[5].title);
    $("#seventhBoxOffice").text(data.items[6].title);
    $("#eigthBoxOffice").text(data.items[7].title);
    $("#ninethBoxOffice").text(data.items[8].title);
    $("#tenthBoxOffice").text(data.items[9].title);
  });
// -------Box Office API Call and function to send titles to list-------- End
const startBtn = document.getElementById("start");
let question = $("#question");
var value_array = [];

//***** Hides Start button and displays quiz *****

// $(".startBtn").click(function(){
//     document.getElementById("quizBtn").style.display = "none";
//     document.getElementById("quizQuestionsContainer").style.display = "block";
//     renderQuestion();
// });

// ***** Questions Array ****
let currentQuestion = {}
let availableQuestions = []
let genres = ['Horror', 'Comedy', 'Documentary', 'Drama', 
    'Family', 'Fantasy', 'History', 'Mystery', 'Sci-Fi', 'Thriller']
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
        document.getElementById("movie-details-container").style.display = "flex";
        console.log(value_array);
        processQuiz(value_array)
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



    fetch ('https://imdb-api.com/en/API/BoxOffice/k_u0gzcze1', {cache:"force-cache"})
.then(function (response){
    return response.json();
})
.then(function (data){
    console.log(data);
    $("#firstBoxOffice").text(data.items[0].title);
    $("#secondBoxOffice").text(data.items[1].title);
    $("#thirdBoxOffice").text(data.items[2].title);
    $("#fourthBoxOffice").text(data.items[3].title);
    $("#fifthBoxOffice").text(data.items[4].title);
    $("#sixthBoxOffice").text(data.items[5].title);
    $("#seventhBoxOffice").text(data.items[6].title);
    $("#eigthBoxOffice").text(data.items[7].title);
    $("#ninethBoxOffice").text(data.items[8].title);
    $("#tenthBoxOffice").text(data.items[9].title);
});
// -------Box Office API Call and function to send titles to list-------- End


//-------to do-------//
//need results to be fetched for genre, MPAA, and year


//---------Results loaded into container after quiz---------//
var myUrl = '';
$("#shuffle-button").click(getMovie);


function processQuiz(answerList){
    console.log('process quiz ran')
    var chosenGenre = []
    var chosenYear = []
    var chosenMPAA = []
    for(let i = 0; i < answerList.length; i++){
        if(genres.includes(answerList[i])){
            chosenGenre.push(answerList[i])
        }else if(years.includes(answerList[i])){
            chosenYear.push(answerList[i])
        }else if(MPAA.includes(answerList[i])){
            chosenMPAA.push(answerList[i])
        }
    }
    const thisKey = "k_2l0uiuyf"
    const baseUrl = `https://imdb-api.com/API/AdvancedSearch/${thisKey}?`
    myUrl = baseUrl
    if (chosenGenre.length > 0){
        var namey = 'genres='
        for(let i = 0; i < chosenGenre.length; i++){
            if(i > 0) namey = namey + ","
            namey = namey + chosenGenre[i]
        }
        myUrl = myUrl + namey + "&"
    }
    if (chosenYear.length > 0){
        var namey = 'release_date='
        for(let i = 0; i < chosenYear.length; i++){
            if(i > 0) namey = namey + ","
            namey = namey + chosenYear[i]
        }
        //THIS SECTION IS BROKEN, API DOES NOT ALLOW THIS FORMATING//
        myUrl = myUrl + namey + "&"
    }
    if (chosenMPAA.length > 0){
        var namey = 'certificates='
        for(let i = 0; i < chosenMPAA.length; i++){
            if(i > 0) namey = namey + ","
            namey = namey + `us:${chosenMPAA[i]}`
        }
        myUrl = myUrl + namey + "&"
    }
    if(myUrl.endsWith("&")) {
      myUrl = myUrl.slice(0,myUrl.length-1);
      localStorage.setItem('myURL', myUrl);
    };
    getMovie()
}
let finalUrl = '';

function getMovie(){
  document.getElementById("quizContainer").style.display = "none";
  if (myUrl == ''){
    finalUrl = localStorage.getItem('myURL');
  }else {
    finalUrl = myUrl;
  }
    fetch(finalUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (response){
        return response.results;
    })
    .then(function (data){
        console.log(data);
        return randomPickFrom(data)

    })
    .then(function (movie){
        const movieImg = document.querySelector(".movie-image-container");
        const MovieTitle = document.querySelector(".movie-title-container");
        const MovieMPAA = document.querySelector(".movie-MPAA");
        const MovieGenre = document.querySelector(".movie-genre");

        MovieTitle.textContent = movie.title;
        MovieMPAA.textContent = movie.contentRating;
        MovieGenre.textContent = movie.genres;
        movieImg.innerHTML = `<img src=${movie.image} class="movie-image">`;


})}
function randomPickFrom(from){
    let randNum = Math.floor(Math.random()*from.length)
    console.log(from[randNum])
    return from[randNum]
}
