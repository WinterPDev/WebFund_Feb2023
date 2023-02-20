console.log('JS is online!')


function showPopup(msg) {
    // msg = 'Alert From JS! Custom!'
    alert(msg);
}

function evolvePokemon(element) {
    // this == element
    // this allows us to select the particular HTML element the function is called from!
    element.src = "./images/Scizor.png";
}

function devolvePokemon(element) {
    element.src = "./images/scyther.png"
}

function changeButton(element) {
    element.innerText = 'New Button Text';
}

function deleteButton(element) {
    element.remove();
}

