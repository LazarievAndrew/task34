// циферблат

export default function getNumbers(x, y, radius, width, context) {
    const rNum = radius - width / 50;
    for (let i = 1; i <= 12; i++) {
        context.beginPath();
        context.font = `bold ${width / 20}px sans-serif`;
        const xNumber = x + (rNum - width / 20) * Math.cos(30 * i * (Math.PI / 180) - Math.PI / 2);
        const yNumber = y + (rNum - width / 20) * Math.sin(30 * i * (Math.PI / 180) - Math.PI / 2);
        if (i < 10) {
            context.strokeText(i, xNumber - width / 90, yNumber + width / 55);
        } else {
            context.strokeText(i, xNumber - width / 30, yNumber + width / 55);
        }
        context.stroke();
        context.closePath();
    }
}
