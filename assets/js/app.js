var enterButton = document.createElement('button');
enterButton.innerHTML = "Enter";

// var myDiv = document.querySelector('.newDiv');
// myDiv.appendChild(enterButton);
// myDiv.classList.add('enter');

var enterSlide = document.querySelector('.enter');
var enterBtn = document.querySelector('.enter button');
var content = document.querySelector('.content');
var fond = document.querySelector('body');
var animation = document.querySelector('fadeIn');

enterBtn.addEventListener('click', function(e) {
  enterSlide.classList.add('fadeOut');
})

// enterSlide.addEventListener('animationstart', function(e){
//   fond.classList.add('background--blur');
// })

enterSlide.addEventListener('animationend', function(e) {
  console.log(e)
  if (e.animationName === "fadeOut") {
    content.classList.add('fadeIn');
    document.querySelector('.enter').style.zIndex = "-1";
    //var removeButton = myDiv.removeChild(enterButton);
    //myDiv.classList.remove("enter");
  }
})

//var removeFade = content.removeChild('fadeIn');

var triggerElements=document.querySelectorAll("a.nav__el");
        for (var i=0; i < triggerElements.length; i++){
          triggerElements[i].addEventListener("click", function(e){
            var contentElements = document.querySelectorAll(".tab-content");
            for (var i = 0; i < contentElements.length; i++){
                contentElements[i].classList.add("hide");
              }
              var href = e.target.getAttribute("href");

              var currentTab = document.querySelector(href);
              currentTab.classList.remove("hide");
            });
        }