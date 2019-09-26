import analogClock from './scripts/analogClock';

window.onload = (() => {
    window.setInterval(() => analogClock(), 1000);
});
