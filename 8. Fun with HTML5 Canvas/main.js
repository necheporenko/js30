const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; //ширина екрана
canvas.height = window.innerHeight;
ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round'; //скругление краев
ctx.lineCap = 'round'; //форма линии
ctx.lineWidth = 75;

let drawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;  //color
let direction = true;

function draw(e) {
	if (!drawing) return; //когла лкм не нажат
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath(); //начало
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke(); //применить
	lastX = e.offsetX;
	lastY = e.offsetY;
	//ES  [lastX, lastY] = [e.offsetX, e.offsetY];

	hue++;
	if (hue >= 360) {
		hue = 0;
	}
	if (ctx.lineWidth >= 75 || ctx.lineWidth <= 5) {
		direction = !direction;
	}
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', (e) => {
	drawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseout', () => drawing = false);