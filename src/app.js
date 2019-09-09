import { analogClock } from './scripts/analogClock';

window.onload = function () {
    window.setInterval(() => analogClock(), 1000);
}