
// To detect clicks on drums
for(var i=0; i<document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  keyAnimation(buttonInnerHTML)
    });
}

// To detect keys pressed on keyboard
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  keyAnimation(event.key)
});

// Play sounds when key pressed or clicked
function makeSound(key){
  switch (key) {

    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick.mp3");
      kick.play();
      break;


    default:
      console.log(buttonIneerHTML);
  }
}


// Play key animation when key pressed or clicked
function keyAnimation(keypressed){
  // add class to the button pressed
  document.querySelector("." + keypressed).classList.add("pressed");

  // timeout the animatiom
  setTimeout(function(){
    document.querySelector("." + keypressed).classList.remove("pressed");
  }, 100);
}
