function myFunction() {
  
  document.getElementById("blogBody").contentEditable = true;
    document.getElementById("button").innerHTML = "Save";
    ;
    }
function change() {
    
    var element = document.getElementById("a");
element.innerHTML = "Liked";
    document.getElementById("update").innerHTML="1 person likes this!";
}
function getwords(){
//text = words.value;
//document.getElementById("para").innerHTML = text;
//document.getElementById("comments").innerHTML = "enter";
   //  document.getElementById('display').innerHTML = 
                   // document.getElementById("comments").value;
    document.getElementById('display').innerHTML = 
                    document.getElementById("user_input").value;
}
 
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