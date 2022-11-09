const arrOfColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');
const valueColor = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        console.log(getRandomNumber());
        hex += arrOfColors[getRandomNumber()];
    }

    document.querySelector('body').style.backgroundColor = hex;
    document.querySelector('.color').textContent = hex;
    document.querySelector('.color').style.color = hex;
})

function getRandomNumber() {
    return Math.floor(Math.random() * arrOfColors.length);
}
