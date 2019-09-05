// Часы на canvas

// Реализовать часы на canvas.Стилизация произвольная,
//  но должна быть по структуре похожа на пример


function analogClock() {

    var canvas = document.getElementById('clocks');
    var ctx = canvas.getContext('2d');

    // центр и радиус
    var radiusClock = canvas.width / 2 - canvas.width / 50;
    var xCenter = canvas.width / 2;
    var yCenter = canvas.width / 2;

    // очистка канвас
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // контур
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, radiusClock, 0, 2 * Math.PI, true);
    ctx.moveTo(xCenter, yCenter);
    ctx.stroke();
    ctx.closePath(); //можно не писать

    // отметки секунд
    var radiusSec = radiusClock - canvas.width / 50;
    var radiusSecPoint;

    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        if (i % 5 === 0) {
            radiusSecPoint = canvas.width / 100;
        } else {
            radiusSecPoint = canvas.width / 200;
        };
        var xSecPoint = xCenter + radiusSec * Math.cos(6 * i * (Math.PI / 180) + Math.PI / 2);
        var ySecPoint = xCenter + radiusSec * Math.sin(6 * i * (Math.PI / 180) + Math.PI / 2);
        ctx.arc(xSecPoint, ySecPoint, radiusSecPoint, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();
    };

    // цифры
    for (let i = 1; i <= 12; i++) {
        ctx.beginPath();
        ctx.font = `bold ${canvas.width / 20}px sans-serif`;
        var xNumber = xCenter + (radiusSec - canvas.width / 20) * Math.cos(30 * i * (Math.PI / 180) - Math.PI / 2);
        var yNumber = xCenter + (radiusSec - canvas.width / 20) * Math.sin(30 * i * (Math.PI / 180) - Math.PI / 2);
        if (i < 10) {
            ctx.strokeText(i, xNumber - canvas.width / 90, yNumber + canvas.width / 55);
        } else {
            ctx.strokeText(i, xNumber - canvas.width / 30, yNumber + canvas.width / 55);
        };
        ctx.stroke();
        ctx.closePath();
    }

    //стрелки
    var secondsArrowLength = radiusSec * 0.95;
    var minutesArrowLength = radiusSec * 0.8;
    var hoursArrowLength = radiusSec * 0.6;
    var time = new Date();
    var timeSeconds = 6 * time.getSeconds();
    var timeMinutes = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
    var timeHours = 30 * (time.getHours() + (1 / 60) * time.getMinutes());

    /////////////часовая стрелка
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = canvas.width / 80;
    ctx.moveTo(xCenter, yCenter);
    ctx.lineTo(xCenter + hoursArrowLength * Math.cos(Math.PI / 2 - timeHours * (Math.PI / 180)),
        yCenter - hoursArrowLength * Math.sin(Math.PI / 2 - timeHours * (Math.PI / 180)));

    ctx.stroke();
    ctx.closePath();

    /////////////минутная стрелка
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = canvas.width / 120;
    ctx.moveTo(xCenter, yCenter);
    ctx.lineTo(xCenter + minutesArrowLength * Math.cos(Math.PI / 2 - timeMinutes * (Math.PI / 180)),
        yCenter - minutesArrowLength * Math.sin(Math.PI / 2 - timeMinutes * (Math.PI / 180)));

    ctx.stroke();
    ctx.closePath();

    /////////////секундная стрелка
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = canvas.width / 250;
    ctx.moveTo(xCenter, yCenter);
    ctx.lineTo(xCenter + secondsArrowLength * Math.cos(Math.PI / 2 - timeSeconds * (Math.PI / 180)),
        yCenter - secondsArrowLength * Math.sin(Math.PI / 2 - timeSeconds * (Math.PI / 180)));

    ctx.stroke();
    ctx.closePath();

    //кружок в центре
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, radiusClock / 35, 0, 2 * Math.PI, true);
    ctx.moveTo(xCenter, yCenter);
    ctx.save();
    ctx.clip();
    ctx.clearRect(xCenter - radiusClock / 35, yCenter - radiusClock / 35,
        radiusClock / 35 * 2, radiusClock / 35 * 2);
    ctx.restore();
    ctx.stroke();
    ctx.closePath();

    return;
};

window.onload = function () {
    window.setInterval(() => analogClock(), 1000);
};