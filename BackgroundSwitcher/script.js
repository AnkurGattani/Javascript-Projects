const colors = document.querySelectorAll('.color');
const body = document.querySelector("body");

colors.forEach((color) => {
	color.addEventListener('click', (event) => {
		const id = event.target.id;
		if (id === 'random') {
			const bgc = generateRandomColor();
			body.style.backgroundColor = bgc;
			console.log(bgc);
		}
		else {
			body.style.backgroundColor = id;
		}
	})
})

function generateRandomColor() {
	const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return color;
}