// console.log("This is from JS file");






// window.addEventListener("load", function () {
//     console.log("This is from Window.load");
// });

// window.addEventListener("DOMContentLoaded", () => {
//     console.log("This is from Window.DOMContentLoaded");
//   });

//   window.onload = function() {
//     // init();
//     // doSomethingElse();
//     console.log("This is from Window.onLoad");

//   };


window.onload = function() {
        // init();
        // doSomethingElse();
        console.log("This is from Window.onLoad");
    
      };



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("para").innerText = "This is a new paragraph";
    console.log("Paragraph text changed!");
  });






//   window.onload = function() { // same as window.addEventListener('load', (event) => {
//     alert('Page loaded');

//     // image is loaded at this time
//     alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
//   };


