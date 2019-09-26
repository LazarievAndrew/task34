import getContur from './getContur';
import getSecondsPoints from './getSecondsPoints';
import getNumbers from './getNumbers';
import getArrow from './getArrow';
import getCenterRound from './getCenterRound';

export default function analogClock() {
    const canvas = document.getElementById('clocks');
    const ctx = canvas.getContext('2d');

    // центр и радиус
    const radiusClock = canvas.width / 2 - canvas.width / 50;
    const xCenter = canvas.width / 2;
    const yCenter = canvas.height / 2;

    // очистка канвас
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    getContur(xCenter, yCenter, radiusClock, ctx);
    getSecondsPoints(xCenter, yCenter, radiusClock, canvas.width, ctx);
    getNumbers(xCenter, yCenter, radiusClock, canvas.width, ctx);

    // стрелки
    const secondsArrowLength = radiusClock * 0.95;
    const minutesArrowLength = radiusClock * 0.8;
    const hoursArrowLength = radiusClock * 0.65;
    const time = new Date();
    const timeSeconds = 6 * time.getSeconds();
    const timeMinutes = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds());
    const timeHours = 30 * (time.getHours() + (1 / 60) * time.getMinutes());
    // часовая
    getArrow(xCenter, yCenter, timeHours, hoursArrowLength, canvas.width / 80, 'black', ctx);
    // минутная
    getArrow(xCenter, yCenter, timeMinutes, minutesArrowLength, canvas.width / 120, 'blue', ctx);
    // секундная
    getArrow(xCenter, yCenter, timeSeconds, secondsArrowLength, canvas.width / 250, 'red', ctx);
    // кружок в центре
    getCenterRound(xCenter, yCenter, radiusClock, ctx);
}
