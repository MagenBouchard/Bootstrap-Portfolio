
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzkO8E0cXoQZuXtOzCDdIlxiU0RkHHoy8",
    authDomain: "contact-me-db33e.firebaseapp.com",
    databaseURL: "https://contact-me-db33e.firebaseio.com",
    projectId: "contact-me-db33e",
    storageBucket: "contact-me-db33e.appspot.com",
    messagingSenderId: "220113844472",
    appId: "1:220113844472:web:a6b34e0ffe4fac2dbaa30d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


var name = "";
var emailAddress = "";
var paragraph = "";

$("#submit").on("click", function (event) {
    event.preventDefault();
    name = $("#nameinput").val().trim();
    emailAddress = $("#emailinput").val().trim();
    paragraph = $("#paragraphinput").val();
    // console.log("clicl");
    hide();
  
    database.ref().push({
        name: name,
        emailAddress: emailAddress,
        paragraph: paragraph




        
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });



    // database.ref().set({
    //     name: name,
    //     emailAddress: emailAddress,
    //     paragraph: paragraph
    // });
});

database.ref().on("value", function (snapshot) {



});




function hide(){
    $(".form-group").hide();
    $("#submit").hide();
    $("#contactme").hide();

    $(".hidemessage").html("<h1> Thank you " + name + "! We will be in touch! </h1>");

}


 
