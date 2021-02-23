const button = document.getElementById('btn');
const color = document.querySelector('.color');

changeColor = () => {
    const min = 0;
    const max = 255;
    const rgba = 'rgba' + '(' + randomNoBwTwoNumber(max, min) + ',' + randomNoBwTwoNumber(max, min) + ',' + randomNoBwTwoNumber(max, min) + ',' +  randomNoBwZeroAndOne(1, 0) + ')';
    // console.log('rbga =>', rgba);
    document.body.style.backgroundColor = rgba;
    color.innerText = rgba;
}

button.addEventListener('click', changeColor);

function randomNoBwTwoNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNoBwZeroAndOne(max, min) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}