
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




function hideForm() {
  document.getElementById("gform").style.display = "none";
  document.getElementById("submitted").style.display ="block";
}

function lataaKuvat() {

var linkit = [
"https://i.imgur.com/ujbmgcn.png",
"https://i.imgur.com/odkOJ9I.png",
"https://i.imgur.com/oFrbZ5z.png",
"https://i.imgur.com/aDJOjiP.png",
"https://i.imgur.com/pq6GyQL.png",
"https://i.imgur.com/wiB2Xgn.png",
"https://i.imgur.com/Fc7Hj4d.png",
"https://i.imgur.com/dH4359m.png",
"https://i.imgur.com/pQ4g9gE.png",
"https://i.imgur.com/483zBG8.jpg",
"https://i.imgur.com/dJfr7NE.jpg",
"https://i.imgur.com/sjBupjC.png",
"https://i.imgur.com/o9MxUrh.png",
"https://i.imgur.com/JNjsMby.png",
"https://i.imgur.com/4yaK7Yk.png",
"https://i.imgur.com/5e7m3cO.png",
"https://i.imgur.com/6FRwvLH.png",
"https://i.imgur.com/pskclYO.jpg",
"https://i.imgur.com/Asnrp2D.jpg",
"https://i.imgur.com/NsCp7tu.png",
"https://i.imgur.com/zi3pjoG.png"
];

var testiTeksti = "";
var testiTekstiToinen = "";
var x = linkit.length;

for (var i = 0; i < x; i++) {
  testiTeksti += '<div class="column"><img src="' + linkit[i] + '" onclick="openModal();currentSlide(' + (i+1) + ')" class="cursor card"></div>';
  testiTekstiToinen += '<div class="mySlides"><img src="' + linkit[i] + '" class="iso"></div>';
}

document.getElementById("worksPreview").innerHTML = testiTeksti;
document.getElementById("worksModal").innerHTML = testiTekstiToinen;
}

/*

<div class="column">
<img src="' + linkit[i] + '" onclick="openModal();currentSlide(' + (i+1) + 
')" class="cursor card"></div>

    <div class="mySlides"><img src="' + linkit[i] + '" class="iso"></div>
*/
