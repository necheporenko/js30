	const hero = document.querySelector('.hero');
	const text = hero.querySelector('h1');
	const walk = 200;

	function shadow(e) {
		const width = hero.offsetWidth;
		const height = hero.offsetHeight;
		//const { offsetHeight: width, offsetHeight: heiht} = hero;
		let x = e.offsetX;
		let y = e.offsetY;
		//let { offsetX: x, offsetY: y } = e;

		if( this !== e.target) { //this=hero
			x = x + e.target.offsetLeft;
			y = y + e.target.offsetTop;
		}

		const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0,0,255,0.7),
    ${yWalk}px ${xWalk}px 0 rgba(255,255,0,0.7)
    `;

    console.log(xWalk, yWalk)
	}

	hero.addEventListener('mousemove', shadow);