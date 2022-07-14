// Start button hide and questions appear
$(".startBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizQuestionsContainer").style.display = "block";
});



// Hiding middle section to show top 10 list
$("#topTwoFifty").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("mostPopular").style.display = "none";
    document.getElementById("boxOffice").style.display = "none";
    document.getElementById("inTheaters").style.display = "none";
    document.getElementById("temporary").style.display = "block";

});

// Hiding middle section to show Most Popular list
$("#mostPopularBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("temporary").style.display = "none";
    document.getElementById("boxOffice").style.display = "none";
    document.getElementById("inTheaters").style.display = "none";
    document.getElementById("mostPopular").style.display = "block";

});

// Hiding middle section to show In Theaters list
$("#boxOfficeBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("temporary").style.display = "none";
    document.getElementById("mostPopular").style.display = "none";
    document.getElementById("inTheaters").style.display = "none";
    document.getElementById("boxOffice").style.display = "block";

});

// Hiding middle section to show Box Office list
$("#inTheatersBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("temporary").style.display = "none";
    document.getElementById("mostPopular").style.display = "none";
    document.getElementById("boxOffice").style.display = "none";
    document.getElementById("inTheaters").style.display = "block";

});


// -------Top 10 SlideShow Function and API calls for them-------- Start
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {

// Calling API for top 250 movies
fetch('https://imdb-api.com/en/API/Top250Movies/k_u0gzcze1', {cache:"force-cache"})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  $("#firstMovie").attr("src", data.items[0].image)
  $("#secondMovie").attr("src", data.items[1].image)
  $("#thirdMovie").attr("src", data.items[2].image)
});


  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "flex";
  circles[slidePosition-1].className += " enable";
} 
// -------Top 10 SlideShow Function and API calls for them-------- End




// -------Most Popular API Call and function to send titles to list-------- Start
fetch ('https://imdb-api.com/en/API/MostPopularMovies/k_u0gzcze1', {cache:"force-cache"})
.then(function (response){
    return response.json();
})
.then(function (data){
    $("#firstMoviePopular").text(data.items[0].title);
    $("#secondMoviePopular").text(data.items[1].title);
    $("#thirdMoviePopular").text(data.items[2].title);
    $("#fourthMoviePopular").text(data.items[3].title);
    $("#fifthMoviePopular").text(data.items[4].title);
    $("#sixthMoviePopular").text(data.items[5].title);
    $("#seventhMoviePopular").text(data.items[6].title);
    $("#eigthMoviePopular").text(data.items[7].title);
    $("#ninethMoviePopular").text(data.items[8].title);
    $("#tenthMoviePopular").text(data.items[9].title);
});
// -------Most Popular API Call and function to send titles to list-------- End


// -------In Theaters API Call and function to send titles to list-------- Start
fetch ('https://imdb-api.com/en/API/InTheaters/k_u0gzcze1', {cache:"force-cache"})
.then(function (response){
    return response.json();
})
.then(function (data){
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