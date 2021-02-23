const value = document.querySelector('#value');
const decrement = document.querySelector('.decrease');
const increment = document.querySelector('.increase');
const reset = document.querySelector('.reset');

let counter = 0;

increment.addEventListener('click', (e) => {
    const style = e.target.classList;
    if(style.contains('increase')) {
        counter++;
        value.textContent = counter;
        changeColorOfValue(counter);
    }
})
decrement.addEventListener('click', (e) => {
    const style = e.target.classList;
    if(style.contains('decrease')) {
        counter--;
        value.textContent = counter;
        changeColorOfValue(counter);
    }
})
reset.addEventListener('click', (e) => {
    const style = e.target.classList;
    if(style.contains('reset')) {
        counter = 0;
        value.textContent = counter;
        changeColorOfValue(counter);
    }
})


function  changeColorOfValue(counter) {
    if(counter > 0) {
        value.style.color = 'green';
    }
    if(counter < 0) {
        value.style.color = 'red';
    }
    if(counter === 0) {
        value.style.color = 'black'
    }
}