/* Called from index.html within bbauska/w3cx-1of5.bauska.org/main.  Playing and learning JS. */
/*--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--*/
/*--~~~~~~~~~~~~~~~~~~~~~~~~~~ script function: scrollFunction() ~~~~~~~~~~~~~~~~~~~~~~~~~~~--*/

// Get the button.
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

// When the user scrolls down 20px from the top of the document, show the button.  10 and 20.
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document, 0.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
