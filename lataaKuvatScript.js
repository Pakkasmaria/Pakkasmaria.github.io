

function lataaKuvat() {

var linkit = [
"https://i.imgur.com/DLePomn.png",
"https://i.imgur.com/uE9d5tw.png",

"https://i.imgur.com/pTYIq42.jpg",
"https://i.imgur.com/ciHVfKc.jpg",
"https://i.imgur.com/ykRdm7v.jpg",
"https://i.imgur.com/qMgVPSP.jpg",
"https://i.imgur.com/6WElblW.jpg",
"https://i.imgur.com/1Fhnh9M.jpg",
"https://i.imgur.com/oJV1mWJ.jpg",
"https://i.imgur.com/BKI7T4g.jpg",
"https://i.imgur.com/kfyQdV7.jpg",
"https://i.imgur.com/Gjtbo8I.jpg",
"https://i.imgur.com/jzOMD6D.jpg",
"https://i.imgur.com/MSGJOkI.jpg",
"https://i.imgur.com/QOQN55b.jpg",
"https://i.imgur.com/TrdAaW6.jpg",
"https://i.imgur.com/iBaWG2K.jpg",
"https://i.imgur.com/ouA3dQO.jpg",
"https://i.imgur.com/4HJMVu4.jpg",
"https://i.imgur.com/2YpGOXz.jpg",
"https://i.imgur.com/M0lKSLX.jpg",
"https://i.imgur.com/pKwQ4BW.jpg",
"https://i.imgur.com/XshBjwN.jpg"
];

var testiTeksti = "";
var testiTekstiToinen = "";
var x = linkit.length;

for (var i = 0; i < x; i++) {
  testiTeksti += '<div class="column"><img src="' + linkit[i] + '" onclick="openModal();currentSlide(' + (i+1) + ')" class="cursor card" loading="lazy"></div>';
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
