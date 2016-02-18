"use strict";
/*Fucntion for contact page*/
(function () {
        if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        
        //Creating variables to store data
        var name = document.getElementById("name");
        var lname = document.getElementById("lname");
        var email= document.getElementById("email");
        var phone= document.getElementById("phone");
        var message= document.getElementById("message");
        var submitbtn = document.getElementById("submitbtn");
        };
//addevent lister for submit button and console log to show output
        submitbtn.addEventListener("click", function(event){
            event.preventDefault();
            console.log("name: " + name.value);
            console.log("lname: " + lname.value);
            console.log("email: " + email.value);
            console.log("phone: " + phone.value);
            console.log("message: " + message.value);
    
        });
})();
        
    
   
