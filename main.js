// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

window.addEventListener('load', (e) => {
	let panacek = document.querySelector('#panacek');
	panacek.style.top = 50 + '%';
	panacek.style.left = 50 + '%';
})

window.addEventListener('keydown', (e) => {
	let panacek = document.querySelector('#panacek');
	let posun = 10;
	let top = window.getComputedStyle(panacek).getPropertyValue('top');
	let left = window.getComputedStyle(panacek).getPropertyValue('left');
	let right = window.getComputedStyle(panacek).getPropertyValue('right');
	let bottom = window.getComputedStyle(panacek).getPropertyValue('bottom');

	switch (e.key) {
        case 'ArrowLeft':
			if (parseInt(left) >= 10) {
				panacek.style.left = parseInt(left) - posun + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek-vlevo.png';
			}
            
			else {
				panacek.style.left = parseInt(left) + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek.png';
			}
            break;
        case 'ArrowRight':
			if (parseInt(right) >= 10) {
            	panacek.style.left = parseInt(left) + posun + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek-vpravo.png';
			}
            
			else {
				panacek.style.left = parseInt(left) + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek.png';
			}
            break;
        case 'ArrowUp':
			if (parseInt(top) >= 10) {
            	panacek.style.top = parseInt(top) - posun + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek-nahoru.png';
			}
            
			else {
				panacek.style.left = parseInt(left) + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek.png';
			}
            break;
        case 'ArrowDown':
			if (parseInt(bottom) >= 10) {
           		panacek.style.top = parseInt(top) + posun + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek.png';
			}
            
			else {
				panacek.style.left = parseInt(left) + 'px';
				document.getElementById('panacek').src = 'obrazky/panacek.png';
			}
            break;
    }
})