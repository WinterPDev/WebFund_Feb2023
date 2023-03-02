console.log('JS Online!')
// Global variables for our HTML elements:
// var pImage1 = document.querySelector('#pImage1');
// var pImage2 = document.querySelector('#pImage2');
// var pImage3 = document.querySelector('#pImage3');

// var pName1 = document.querySelector('#pName1');
// var pName2 = document.querySelector('#pName2');
// var pName3 = document.querySelector('#pName3');
// ============================================================


// Access the PokeAPI to collect three Gym Pokemon for our Coding Dojo Gym website!

// async = asynchronous
// We use the async decorator to access other functionalities: namely await!
async function getPokeData(ids) {

    for (let i = 0; i < ids.length; i++) {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + ids[i])
            .then(response => response.json())
            .then(resJSON => {
                // data.push(resJSON);
                data.push(setPokemon(resJSON))
            })
    }
}

function setHTML(pNames) {
    var display = document.querySelector('#pDisplay');

    for (let i = 0; i < pNames.length; i++) {

        display.innerText += pNames[i].name;

    }

}

function setPokemon(obj) {
    let poke = {
        id: obj.id,
        name: obj.name,
        types: obj.types
    }

    return poke;
}

var data = [];

// getPokeData();
// getPokeData().then(() => setHTML(data[0].name));
getPokeData([1, 2])
    .then(() => {
        setHTML(data)
    })
