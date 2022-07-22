function myFunction(smallImg) {
    var fullImg = document.getElementById("image");
    var fullImage = document.getElementById("image");
    fullImg.src = smallImg.src;
    fullImage.data = smallImg.dataset;

}


//const $linkDOM = document.querySelector(".imagen");

//$linkDOM.setAttribute("data","src");

//$('.zoom').attr('data-magnify-src', '');

/*
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");

img1.onclick = function() {
    img.zoom.src = "../img/muestra1.jpg";
}

img2.onclick = function() {
    img.zoom.src = "../img/muestra2.jpg";
}

img3.onclick = function() {
    img.zoom.src = "../img/muestra3.jpg";
}*/