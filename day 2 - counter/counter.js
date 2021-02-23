const value = document.querySelector('#value');
// const decrement = document.querySelector('.decrease');
// const increment = document.querySelector('.increase');
// const reset = document.querySelector('.reset');

const btns = document.querySelectorAll('.btn');
let counter = 0;

// increment.addEventListener('click', (e) => {
//     const style = e.target.classList;
//     if(style.contains('increase')) {
//         counter++;
//         value.textContent = counter;
//         changeColorOfValue(counter);
//     }
// })
// decrement.addEventListener('click', (e) => {
//     const style = e.target.classList;
//     if(style.contains('decrease')) {
//         counter--;
//         value.textContent = counter;
//         changeColorOfValue(counter);
//     }
// })
// reset.addEventListener('click', (e) => {
//     const style = e.target.classList;
//     if(style.contains('reset')) {
//         counter = 0;
//         value.textContent = counter;
//         changeColorOfValue(counter);
//     }
// })


// function  changeColorOfValue(counter) {
//     if(counter > 0) {
//         value.style.color = 'green';
//     }
//     if(counter < 0) {
//         value.style.color = 'red';
//     }
//     if(counter === 0) {
//         value.style.color = 'black'
//     }
// }

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const allClass = e.currentTarget.classList;
        if(allClass.contains('increase')) {
            counter++;
        }
        else if(allClass.contains('decrease')) {
            counter--;
        }
        else {
            counter = 0;
        }
        changeValueColor(counter);
        value.textContent = counter;
    })
})

function changeValueColor(counter) {
    if(counter > 0) {
        value.style.color = "green";
    }
    if (counter < 0) {
        value.style.color = "red";
    }
    if(counter === 0) {
        value.style.color = "black";
    }
}