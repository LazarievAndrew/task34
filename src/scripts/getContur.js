/* eslint-disable indent */
// контур

export function getContur(x, y, radius, context) {
	context.strokeStyle = 'black';
	context.lineWidth = 2;
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI, true);
	context.moveTo(x, y);
	context.stroke();
	context.closePath();
}
