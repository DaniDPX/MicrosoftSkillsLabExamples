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






document.addEventListener("DOMContentLoaded", () => {
    DOMmodify();
    gebeya();
  });


  window.onload = function() { // same as window.addEventListener('load', (event) => {
    console.log("This is from Window.onLoad");

  };


function DOMmodify()
{
    document.getElementById("para").innerText = "This is a new paragraph";
    console.log("Paragraph text changed!");
}









gebeya = () => {
    console.log("This is an arrow function");
}

function gebeya(){


}









setInterval(() => {
    console.log(document.getElementById("para").style.display);

    if (document.getElementById("para").style.display == "none")
    {
        document.getElementById("para").style.display = "block";
    }
    else
    {
        document.getElementById("para").style.display = "none";
    }
    
}, 3000);