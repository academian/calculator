//Draws a line
function drawLine(ctx, x1, Y1, x2, Y2, stroke = 'black', width = 3) {
	var y1 = ctx.height - Y1;
	var y2 = ctx.height - Y2;
	// start a new path
	ctx.beginPath();

	// place the cursor from the point the line should be started
	ctx.moveTo(x1, y1);

	// draw a line from current cursor position to the provided x,y coordinate
	ctx.lineTo(x2, y2);

	// set strokecolor
	ctx.strokeStyle = stroke;

	// set lineWidht
	ctx.lineWidth = width;

	// add stroke to the line
	ctx.stroke();
}

//draws text on the screen
function text(ctx, x, y, str, color) {
	ctx.fillStyle = color;
	ctx.textAlign = "center";
	ctx.font = "16px Arial";
	ctx.fillText(str, x, y);
}