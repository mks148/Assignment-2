"use strict";
/*Fucntion for contact page*/
(function () {
    if (document.getElementById("intro") != null) {
        var firstparagraph;
        firstparagraph = document.getElementById("intro");
        firstparagraph.innerHTML = "Hi,My Name is Manoj Sharma and this is my startup web development company called <strong>craftelstudios</strong> portfolio . A Web Designer and  Developer from India.</br>I am CREATIVE & INNOVATIVE . I CRAFT YOUR IDEAS INTO BEAUTIFUL PIXELS. </br>I have very good skills in HTML5,Css,bootstrap and designing user interface designs in photoshop. </br> I am here in Georgain college to gain more knowledge about programming and startup with my own web design/development studio ";
    }
    else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        
       //Creating variables to store data
        var name = document.getElementById("name");
        var lname = document.getElementById("lname");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var message = document.getElementById("message");
        var submitbtn = document.getElementById("submitbtn");
    };
    
    //addevent lister for submit button and console log to show output
    submitbtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("name: " + name.value);
        console.log("lname: " + lname.value);
        console.log("email: " + email.value);
        console.log("phone: " + phone.value);
        console.log("message: " + message.value);

    });
})();
        
    
   
