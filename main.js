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
	let sirkaMince = mince.width;
	let vyskaMince = mince.height;
	let minceX = Math.floor(Math.random() * window.innerWidth + sirkaMince);
	let minceY = Math.floor(Math.random() * window.innerHeight + vyskaMince);
	mince.style.top = minceY + 'px';
	mince.style.left = minceX + 'px';

	let random = Math.random();

	if (random < 0.3) {
		mince.src = 'obrazky/mince-bronzova.png';
	} else if (random >= 0.3 && random <= 0.6) {
		mince.src = 'obrazky/mince-stribrna.png';
	} else {
		mince.src = 'obrazky/mince.png';
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
		let score = 0;
		score++;
		document.getElementById("score").innerHTML = score;
		dejMnci();
	}

	
}


