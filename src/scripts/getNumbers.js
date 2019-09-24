// циферблат

export function getNumbers(x, y, radius, width, context) {
    const radiusNum = radius - width / 50;
    for (let i = 1; i <= 12; i++) {
        context.beginPath();
        context.font = `bold ${width / 20}px sans-serif`;
        // eslint-disable-next-line max-len
        const xNumber = x + (radiusNum - width / 20) * Math.cos(30 * i * (Math.PI / 180) - Math.PI / 2);
        // eslint-disable-next-line max-len
        const yNumber = y + (radiusNum - width / 20) * Math.sin(30 * i * (Math.PI / 180) - Math.PI / 2);
        if (i < 10) {
            context.strokeText(i, xNumber - width / 90, yNumber + width / 55);
        } else {
            context.strokeText(i, xNumber - width / 30, yNumber + width / 55);
        }
        context.stroke();
        context.closePath();
    }
}
