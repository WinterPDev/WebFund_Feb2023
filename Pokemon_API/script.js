console.log('JS Online!')

// Global variables for our HTML elements:
var pImage1 = document.querySelector('#pImage1');
var pImage2 = document.querySelector('#pImage2');
var pImage3 = document.querySelector('#pImage3');

var pName1 = document.querySelector('#pName1');
var pName2 = document.querySelector('#pName2');
var pName3 = document.querySelector('#pName3');
// ============================================================


// Access the PokeAPI to collect three Gym Pokemon for our Coding Dojo Gym website!

// async = asynchronous
// We use the async decorator to access other functionalities: namely await!
async function getPokeData() {
    var gymStarters = ['mawile', 'dugtrio', 'raikou'];
    // await doesn't allow the code to continue until it resolves the code line.
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + gymStarters[0]);
    // response is what the server tells us (Typically a success or fail)
    var pokeData = await response.json();

    // bidoof
    // dugtrio
    // raikou

    // Java Script Object Notation

    console.log(pokeData.name);

    pName1.innerText += pokeData.name

    pImage1.src = pokeData.sprites.front_shiny


    response = await fetch("https://pokeapi.co/api/v2/pokemon/" + gymStarters[1]);
    pokeData = await response.json();

    pName2.innerText += pokeData.name;
    pImage2.src = pokeData.sprites.front_shiny

    response = await fetch("https://pokeapi.co/api/v2/pokemon/" + gymStarters[2]);
    pokeData = await response.json();

    pName3.innerText += pokeData.name;
    pImage3.src = pokeData.sprites.front_shiny
}

// getPokeData();

