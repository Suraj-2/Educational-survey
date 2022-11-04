
// JavaScript validation

 function validateFirstName(){
   var firstName = document.getElementById("firstName").value;
 
    if(firstName.length < 2)
     document.getElementById("message1").innerHTML = "*enter two or more characters!";
    else
     document.getElementById("message1").innerHTML  ="valid";
 }
 // JavaScript validation
 
function validateLastName(){
   var lastName = document.getElementById("lastName").value;
 
    if(lastName.length < 2)
     document.getElementById("message2").innerHTML = "*enter two or more characters!";
    else
     document.getElementById("message2").innerHTML  ="valid";
 }
 
function validatePhone(){
 var phoneNumber = document.getElementById("phone").value;
 var regex = /^\d{10}$/;
 
 if(regex.test(phoneNumber))//Test is 
  document.getElementById("message3").innerHTML = " valid !";
 else
  document.getElementById("message3").innerHTML =  "*Please use a VALID Number !";
 }
 
function validateLocality(){
   var locality = document.getElementById("locality").value;
 
    if(locality.length < 3)
     document.getElementById("message4").innerHTML = "*enter  more than two  characters!";
    else
     document.getElementById("message4").innerHTML  ="Input accepted!";
 }
 
function validateState(){
   var state = document.getElementById("state").value;
 
    if(state.length < 3)
     document.getElementById("message5").innerHTML = "*enter  more than two characters!";
    else
     document.getElementById("message5").innerHTML  ="Input accepted!";
 }
 
function validateCountry(){
   var country = document.getElementById("country").value;
 
    if(country.length < 3)
     document.getElementById("message6").innerHTML = "*enter  more than two characters!";
    else
     document.getElementById("message6").innerHTML  ="Input accepted!";
 }