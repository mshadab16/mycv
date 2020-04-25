//jshint esversion:6

// const express = require("express");
// const bodyParser = require("body-parser");
// var path = require("path");
// const app = express();
//
// app.use(express.static("views"));
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended: true}));
//
//
// app.get("/", function(req, res){
//  res.render('index.html');
// });
//
// app.listen(3000, function(){
//   console.log("Server started on port 3000.");
// });



// navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll('a');

a.forEach(function(element) {
  element.addEventListener("click", function() {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add('active');
    document.querySelector(".navbar").classList.toggle("show");

  });
});

// header fixed


window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;
    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed");
        }
        else {
            document.querySelector("header").classList.remove("fixed");
        }
    }
};

//responsive

const hamBurger = document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
});





// Education slider//

// const sliderContainer = document.querySelector('.education-slider');
// const slides = sliderContainer.children;
// const containerWidth = sliderContainer.offsetWidth;
// const margin = 30;
// let itemPerSlide = 0;
//
// // responsive
//
// const responsive = [
//   {breakPoint: {width: 0, item:1}},
//   {breakPoint: {width: 991, item:2}},
// ];
//
// function load(){
//   for(let i=0; i<responsive.length; i++){
//     if(window.innerWidth> responsive[i].breakPoint.width){
//      itemPerSlide=responsive[i].breakPoint.item;
//     }
//   }
//  start();
// }
//
// function start(){
//   for(let i=0; i<slides.length; i++){
//     slides[i].style.width=(containerWidth/itemPerSlide)-margin + "px";
//     slides[i].style.margin= margin/2 + 'px';
//   }
//   sliderContainer.style.width = containerWidth*itemPerSlide + 'px';
//
//   const slideDots=Math.ceil(slides.length/itemPerSlide);
//
//   for(let i=0; i<slideDots.length; i++){
//     const div=document.createElement("div");
//     div.id=i;
//     div.setAttribute("onclick", controlSlide(this));
//     if(i===0){
//       div.classList.add("active");
//     }
//     document.querySelector(".slide-controls").appendChild(div);
//   }
// }
//
// window.onload = load();
