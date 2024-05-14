// menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
//  end menu



function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

 }



 function func(){
  var email= document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (email == "tigzozo@gmail.com" && pass =="tig@2024") {
    alert("successfull")
    window.location.assign("index.html")
  }else{
    alert("wrong entry invalid-input please try again")
  }
 }
 
 
 