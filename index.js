// var drumButton = document.querySelectorAll(".drum").length;
// var i = 0;
// while (i < drumButton) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var buttonI = this.innerHTML;
//     switch (buttonI) {
//       case "w":
//         var tom1 = new Audio('/sounds/tom-1.mp3');
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("/sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("/sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("/sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var snare = new Audio("/sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         var crash = new Audio("/sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         var kick = new Audio("/sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       default:
//         console.log(buttonI);
//         break;
//     }
//   });
//   i++;
// }
// // using for loop
// var drumButton = document.querySelectorAll(".drum").length;
// for (i = 0; i < drumButton; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     var button = this.innerHTML;
//     method(button);
//   });
//   document.addEventListener("keypress", function (event) {
//     method(event.key);
//   });
//   function method(value) {
//     switch (value) {
//       case "w":
//         var tom1 = new Audio("/sounds/tom-1.mp3");
//         tom1.play();
//         break;
//       case "a":
//         var tom2 = new Audio("/sounds/tom-2.mp3");
//         tom2.play();
//         break;
//       case "s":
//         var tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//       case "d":
//         var tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//       case "j":
//         var snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
//       case "k":
//         var crash = new Audio("/sounds/crash.mp3");
//         crash.play();
//         break;
//       case "l":
//         var kick = new Audio("/sounds/kick-bass.mp3");
//         kick.play();
//         break;
//       default:
//         console.log(key);
//         break;
//     }
//   }
// }
var drumButton = document.querySelectorAll(".drum").length;
for (i = 0; i < drumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
  });
  document
    .querySelectorAll(".drum")
    [i].addEventListener("keypress", function (event) {
      var event = event.key;
      playSound(event);
      addAnimation(event);
    });
  function playSound(eventName) {
    switch (eventName) {
      case "w":
        var audio = new Audio("assets/sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio2 = new Audio("assets/sounds/tom-2.mp3");
        audio2.play();
        break;
      case "s":
        var audio3 = new Audio("assets/sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        var audio4 = new Audio("assets/sounds/tom-4.mp3");
        audio4.play();
        break;
      case "j":
        var audio5 = new Audio("assets/sounds/snare.mp3");
        audio5.play();
        break;
      case "k":
        var audio6 = new Audio("assets/sounds/crash.mp3");
        audio6.play();
        break;
      case "l":
        var audio7 = new Audio("assets/sounds/kick-bass.mp3");
        audio7.play();
        break;
      default:
        console.log(eventName);
    }
  }
  function addAnimation(to){
    var addTo = document.querySelector("." + to);
    addTo.classList.add("pressed");
    setTimeout(function(){
        addTo.classList.remove("pressed");
    }, 100);
  }
}
