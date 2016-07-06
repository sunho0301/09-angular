'use strict';
//$(document).ready(function() {
//Use jQuery and the 'keyup' event to say "good morning" to whoever's name 
//is typed into the #toGreet input. 
// - The greeting should dynamically change as you type!
// - The person's name should be _emphasized_ or otherwise formatted with css!

//Don't forget to wrap your script in a callback so it runs when the document
//has loaded.

/* try1.... not working
$('text').type(function(event) {
    var name = encodeURIComponent(document.querySelector('input').value);
    var greet = function(name) {
        var elementP = document.createElement("p");
        var sentence = document.createTextNode("Hello, "+name);
        elementP.appendChild(sentence);
        var site = document.getElementById('greeting');
        site.appendChild(elementP);

    }
});*/

// answer
// when keyup event occurs
// 'input' or '#toGreet'
$('input').keyup(function(){
    var name = $(this).val() // == $('input').val()
    $('#greeting').text('Hello, '+name);
})






//});