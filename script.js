const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

function resize() {
    canvas.width = 500;
    canvas.height = 500;
}

// context.beginPath(); // начало новой элементарной геометрической фигуры
// context.moveTo(0, 0); // ставим перо в верхний левый угол
// context.lineTo(300, 400); // декларация намерения нарисовать прямую линию с определенными координатами
// context.stroke(); // реализация рисования прямой линии

// context.beginPath();
// context.moveTo(300, 400);
// context.lineTo(500, 0);
// context.stroke(); 

context.beginPath();
context.moveTo(0, 0);
context.lineTo(300, 400);
context.lineTo(500, 0);
context.strokeStyle = 'red';
context.lineWidth = 5;
context.stroke(); 
