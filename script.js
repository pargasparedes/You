// Start button hide and questions appear
$(".startBtn").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizQuestionsContainer").style.display = "block";
});

// Hiding middle section to show top 10 list
$("#topTwoFifty").click(function(){
    document.getElementById("quizBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("temporary").style.display = "block";

});



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
fetch('https://imdb-api.com/en/API/Top250Movies/k_2s1d2j41')
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

