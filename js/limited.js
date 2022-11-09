const arrOfColors = ['red', 'blue', 'green', 'yellow'];

const btn = document.querySelector('.btn');
const valueColor = document.querySelector('.color');

btn.addEventListener('click', function() {
    let index = getRandomNumber();
    
    let color = arrOfColors[index];

    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.color').textContent = color;
    document.querySelector('.color').style.color = color;
})

function getRandomNumber() {
    return Math.floor(Math.random() * arrOfColors.length);
}
