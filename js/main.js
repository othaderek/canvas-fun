const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let boxPosX = 600;
let boxPosY = 200;

// Event Handlers
const boxDown = () => {
    box.style.top = parseInt(box.style.top) + 10 + "px";
}
const boxUp = () => {
    box.style.top = parseInt(box.style.top) - 10 + "px";
}
const boxLeft = () => {
    box.style.left = parseInt(box.style.left) - 10 + "px";
}
const boxRight = () => {
    box.style.left = parseInt(box.style.left) + 10 + "px";
}

// Switch for key presses.
const handleKeypress = (e) => {
    e.key === "ArrowRight" ? boxRight(): null;
    e.key === "ArrowLeft" ? boxLeft(): null;
    e.key === "ArrowUp" ? boxUp(): null;
    e.key === "ArrowDown" ? boxDown(): null;
}


canvas.width = window.innerWidth;

ctx.fillStyle = 'tomato';
ctx.fillRect( boxPosX, boxPosY, 100, 100);


document.addEventListener('keypress', handleKeypress);

