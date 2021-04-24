
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

 document.addEventListener('mouseup',function(event){
        var iso = document.getElementById("iso");
        if(event.target != iso && event.target.parentNode != iso){
            closeModal();
        }
  });  

document.onkeydown = checkKey;
function checkKey(e) {
  e = e || window.event;

    if (e.keyCode == '37') { 
      //vasen
      plusSlides(-1);
    }
    else if (e.keyCode == '39') {
      //oikea
      plusSlides(1);
    }
    else if (e.keyCode == '27') {
      //esc
      closeModal();
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function lahetaLomake() {
  var x = document.forms["gform"]["entry.1566658406"].value;
  var y = document.forms["gform"]["entry.1248783314"].value;
  var z = document.forms["gform"]["entry.1789946270"].value;
  if (x==""){
    document.getElementById("fnimi").style.backgroundColor = "#aec1cc";
  }
  if (y==""){
    document.getElementById("femail").style.backgroundColor = "#aec1cc";
  }
  if (z==""){
    document.getElementById("fmessage").style.backgroundColor = "#aec1cc";
  }
  else {
  hideForm();
  }
}

function palautaTausta(x) {
    document.getElementById(x).style.backgroundColor = "white";
}

function hideForm() {
  document.getElementById("gform").style.display = "none";
  document.getElementById("submitted").style.display ="block";
}
