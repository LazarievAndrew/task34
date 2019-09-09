// отметки секунд

export function getSecondsPoints(x, y, radius, width, context) {

    const radiusSec = radius - width / 50;
    let radiusSecPoint;

    for (let i = 0; i < 60; i++) {
        context.beginPath();
        context.strokeStyle = 'black';
        if (i % 5 === 0) {
            radiusSecPoint = width / 100;
        } else {
            radiusSecPoint = width / 200;
        };
        const xSecPoint = x + radiusSec * Math.cos(6 * i * (Math.PI / 180) + Math.PI / 2);
        const ySecPoint = y + radiusSec * Math.sin(6 * i * (Math.PI / 180) + Math.PI / 2);
        context.arc(xSecPoint, ySecPoint, radiusSecPoint, 0, 2 * Math.PI, true);
        context.stroke();
        context.closePath();
    };
}