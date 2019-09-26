// кружок в центре

export default function getCenterRound(x, y, radius, context) {
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, y, radius / 35, 0, 2 * Math.PI, true);
    context.moveTo(x, y);
    context.save();
    context.clip();
    context.clearRect(x - radius / 35, y - radius / 35, (radius / 35) * 2, (radius / 35) * 2);
    context.restore();
    context.stroke();
    context.closePath();
}
