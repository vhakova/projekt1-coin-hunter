// sem začni psát svůj program


//Spustí hru

function priNacteni() {

	document.getElementById('uvod').style.display = 'none';
	
	umistiPanacka();

	dejMinci();
}

let score = 0;
let body;
let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');

//Centrování panáčka

function umistiPanacka() {
	let stred = 50 + '%';
	panacek.style.top = stred;
	panacek.style.left = stred;
}

//Pohyb panáčka
window.addEventListener('keydown', (e) => {

	let posun = 10;
	let top = window.getComputedStyle(panacek).getPropertyValue('top');
	let left = window.getComputedStyle(panacek).getPropertyValue('left');
	let right = window.getComputedStyle(panacek).getPropertyValue('right');
	let bottom = window.getComputedStyle(panacek).getPropertyValue('bottom');

	hudboHrej();

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
		body = 7;
	} else if (random >= 0.6 && (parseInt(left) >= posun) && (parseInt(top) >= posun) && (parseInt(bottom) >= posun) && (parseInt(right) >= posun)){
		mince.src = 'obrazky/mince.png';
		body = 10;
	} else {
		dejMinci();
	}

}


// Sežrání mince

function sezerMinci() {

	let horniOkraj = parseInt(window.getComputedStyle(panacek).getPropertyValue("top"));
  	let levyOkraj = parseInt(window.getComputedStyle(panacek).getPropertyValue("left"));
	let minceY = parseInt(window.getComputedStyle(mince).getPropertyValue("top"));
	let minceX = parseInt(window.getComputedStyle(mince).getPropertyValue("left"));
	let panacekSirka = parseInt(window.getComputedStyle(panacek).getPropertyValue("width"));
	let panacekVyska = parseInt(window.getComputedStyle(panacek).getPropertyValue("height"));
	let minceSirka = parseInt(window.getComputedStyle(mince).getPropertyValue("width"));
	let minceVyska = parseInt(window.getComputedStyle(mince).getPropertyValue("height"));
  
	if (!(levyOkraj + panacekSirka < minceX || minceX + minceSirka < levyOkraj || horniOkraj + panacekVyska < minceY || minceY + minceVyska < horniOkraj)) {

		score = score + body;
      	document.getElementById('score').innerHTML = score;

		zachrastiDrobákem();

		dejMinci();
	}

	if (score >= 100) {
		hudboDost();
		tadaaa();
		document.getElementById('konec').style.display = 'block';
		document.getElementById('bye').innerHTML = 'Wow! Paráda! Podařilo se ti nasbírat ' + score +' mincí. Už jsem z toho celá unavená. Chceš začít znovu?'
	}
	
}

// Pokračuj ve hře

function skryjOznameni() {
	document.getElementById('konec').style.display = 'none';
	score = 0;
	document.getElementById('score').innerHTML = score;
}

// Přehrání zvuku

function hudboHrej() {
	let hudba = document.getElementById('hudba');

	hudba.play();
}

function hudboDost() {
	let hudba = document.getElementById('hudba');

	hudba.pause();
}

function zachrastiDrobákem() {

	let zvukMince = document.getElementById('zvukmince');

	zvukMince.play();
}

function tadaaa() {

	let fanfara = document.getElementById('zvukfanfara');

	fanfara.play();
}




