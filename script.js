
var persons = [
    {
        first_name: "Summer",
        last_name: "Doe",
        location: "Nashville, TN"
    }


]

var pets = [
    {
        pet_type: "Dog",
        pet_location: "Orlando, Fl"
    }


]




function displayPet(pet) {

    document.querySelector('#petType').innerText = pet.pet_type
}


function petSelect(petType) {

    var filteredPets = [];



    document.querySelector('#displaySection').innerHTML = `<div> <h1> ${pet.pet_type}</h1>`
}

