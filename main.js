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

    switch (e.key) {
        case 'ArrowLeft':
            panacek.style.left = parseInt(left) - posun + 'px';
			document.getElementById('panacek').src = 'obrazky/panacek-vlevo.png';
            break;
        case 'ArrowRight':
            panacek.style.left = parseInt(left) + posun + 'px';
			document.getElementById('panacek').src = 'obrazky/panacek-vpravo.png';
            break;
        case 'ArrowUp':
            panacek.style.top = parseInt(top) - posun + 'px';
			document.getElementById('panacek').src = 'obrazky/panacek-nahoru.png';
            break;
        case 'ArrowDown':
            panacek.style.top = parseInt(top) + posun + 'px';
			document.getElementById('panacek').src = 'obrazky/panacek.png';
            break;
    }
})