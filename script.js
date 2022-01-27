'use strict'

console.log("hello");

document.write("<h1>Object Demo </h1>")

const spaceship = {
    Engine: "rocket" ,
    color: "Green" ,
    room: "cockpit" ,
    flying: function(){
        return "My spaship is powerd by" + this .
        Engine + ""+"Therefor it can fly!!!"
    }
}
console.log(" my spaceship is", spaceship.color);

console.log(spaceship.flying());

document.write("<h2>" , spaceship.flying(),  "</h2>")
document.write("<h2> My spaceship is ", spaceship.
color, " and has a " spaceship. room " for style and comfort"   "</h2>")
