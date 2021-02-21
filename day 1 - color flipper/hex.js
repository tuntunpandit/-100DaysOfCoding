const button = document.getElementById('btn');
const color = document.querySelector('.color');

changeColor = () => {
    const randomHexColor = generateRnadomHexColor();
    // console.log(randomHexColor);
    document.body.style.backgroundColor = randomHexColor;

    // any one would work 'innerText' or 'innerHTML' 
    color.innerText = randomHexColor;
    color.innerHTML = randomHexColor;
}
button.addEventListener('click', changeColor);

// generate random hex color function

function generateRnadomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}