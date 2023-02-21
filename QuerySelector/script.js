console.log('JS is online!')

function evolvePokemon() {
    let pName = document.querySelector('#pokeName');
    // console.log(pName);
    pName.innerText = 'Arbok';

    let pImg = document.querySelector('#pokeImg');
    // console.log(pImg);

    pImg.src = './images/600px-0024Arbok.png';
    pImg.alt = 'Arbok';

    let box = document.querySelector('#display');

    box.style.backgroundColor = 'purple'
    box.style.border = '2px yellow solid'
}