// Стрелки

export function getArrow(x, y, time, length, width, color, context) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = width;
    context.moveTo(x, y);
    context.lineTo(x + length * Math.cos(Math.PI / 2 - time * (Math.PI / 180)),
        y - length * Math.sin(Math.PI / 2 - time * (Math.PI / 180)));
    context.stroke();
    context.closePath();
}