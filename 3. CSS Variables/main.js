var inputs = document.querySelectorAll('.controls input');

function Update() {
	var suffix = this.dataset.sizing || '';   //для получение параметров data
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach( input => input.addEventListener('change', Update));
inputs.forEach( input => input.addEventListener('mousemove', Update));
