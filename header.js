
// Get the modal
var modal1 = document.getElementById("signInModal");

// Get the button that opens the modal
var btn1 = document.getElementById("signIn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("shut")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function header() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function header() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function header(event) {
  if (event.target == modal2) {
    modal1.style.display = "none";
  }
}
// Get the modal
var modal2 = document.getElementById("signUpModal");

// Get the button that opens the modal
var btn2 = document.getElementById("signUp");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("shutHead")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function head() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function head() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function head(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}