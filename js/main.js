const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let boxPosX = 600;
let boxPosY = 200;

const handleKeypress = (e) => {
    
}


canvas.width = window.innerWidth;

ctx.fillStyle = 'tomato';
ctx.fillRect( boxPosX, boxPosY, 100, 100);


document.addEventListener('keypress', handleKeypress);

