// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


//Spustí hru

function priNacteni() {
	
	umistiPanacka();

	dejMinci();
}


//Centrování panáčka

function umistiPanacka() {
	let panacek = document.querySelector('#panacek');
	let stred = 50 + '%';
	panacek.style.top = stred;
	panacek.style.left = stred;
}

let score = 0;
let body;

//Pohyb panáčka
window.addEventListener('keydown', (e) => {

	let panacek = document.querySelector('#panacek');
	let posun = 10;
	let top = window.getComputedStyle(panacek).getPropertyValue('top');
	let left = window.getComputedStyle(panacek).getPropertyValue('left');
	let right = window.getComputedStyle(panacek).getPropertyValue('right');
	let bottom = window.getComputedStyle(panacek).getPropertyValue('bottom');

	switch (e.key) {
		case 'ArrowLeft':
			if (parseInt(left) >= posun) {
				panacek.style.left = parseInt(left) - posun + 'px';
				panacek.src = 'obrazky/panacek-vlevo.png';
			} else {
				panacek.src = 'obrazky/panacek.png';
			}
			break;
		case 'ArrowRight':
			if (parseInt(right) >= posun) {
				panacek.style.left = parseInt(left) + posun + 'px';
				panacek.src = 'obrazky/panacek-vpravo.png';
			} else {
				panacek.src = 'obrazky/panacek.png';
			}
			break;
		case 'ArrowUp':
			if (parseInt(top) >= posun) {
				panacek.style.top = parseInt(top) - posun + 'px';
				panacek.src = 'obrazky/panacek-nahoru.png';
			} else {
				panacek.src = 'obrazky/panacek.png';
			}
			break;
		case 'ArrowDown':
			if (parseInt(bottom) >= posun) {
				panacek.style.top = parseInt(top) + posun + 'px';
				panacek.src = 'obrazky/panacek.png';
			} else {
				panacek.src = 'obrazky/panacek.png';
			}
			break;
	}
	sezerMinci();
})

//Umístění mince

function dejMinci() {
	let mince = document.querySelector('#mince');
	let posun = 10;
	let minceX = Math.ceil(Math.random() * window.innerWidth + posun);
	let minceY = Math.ceil(Math.random() * window.innerHeight + posun);

	mince.style.top = minceY + 'px';
	mince.style.left = minceX + 'px';

	let top = window.getComputedStyle(mince).getPropertyValue('top');
	let left = window.getComputedStyle(mince).getPropertyValue('left');
	let right = window.getComputedStyle(mince).getPropertyValue('right');
	let bottom = window.getComputedStyle(mince).getPropertyValue('bottom');
	
	let random = Math.random();

	if ((random < 0.3) && (parseInt(left) >= posun) && (parseInt(top) >= posun) && (parseInt(bottom) >= posun) && (parseInt(right) >= posun))  {
		mince.src = 'obrazky/mince-bronzova.png';
		body = 5;
	} else if (random >= 0.3 && random <= 0.6 && (parseInt(left) >= posun) && (parseInt(top) >= posun) && (parseInt(bottom) >= posun) && (parseInt(right) >= posun)) {
		mince.src = 'obrazky/mince-stribrna.png';
		body = 10;
	} else if (random >= 0.6 && (parseInt(left) >= posun) && (parseInt(top) >= posun) && (parseInt(bottom) >= posun) && (parseInt(right) >= posun)){
		mince.src = 'obrazky/mince.png';
		body = 15;
	} else {
		dejMinci();
	}

}


// Sežrání mince

function sezerMinci() {
	let mince = document.querySelector('#mince');
	let panacek = document.querySelector('#panacek');
	let currentTop = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
  	let currentLeft = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
	let minceY = parseInt(window.getComputedStyle(mince).getPropertyValue("top"));
	let minceX = parseInt(window.getComputedStyle(mince).getPropertyValue("left"));
	let panacekSirka = parseInt(window.getComputedStyle(panacek).getPropertyValue("width"));
	let panacekVyska = parseInt(window.getComputedStyle(panacek).getPropertyValue("height"));
	let minceSirka = parseInt(window.getComputedStyle(mince).getPropertyValue("width"));
	let minceVyska = parseInt(window.getComputedStyle(mince).getPropertyValue("height"));
  
	if (!(currentLeft + panacekSirka < minceX || minceX + minceSirka < currentLeft || currentTop + panacekVyska < minceY || minceY + minceVyska < currentTop)) {

		score = score + body;
      	document.getElementById("score").innerHTML = score;
		
		console.log (score);

		dejMinci();
	}

	
}


