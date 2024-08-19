const pic1 = document.querySelector('.item1');
const arrowIcon = document.querySelector('.arrow');
const btn = document.querySelector('.arrow');

function showMe() {
	pic1.classList.toggle('show');

	if (pic1.classList.contains('show')) {
		console.log(`OK!`);
		arrowIcon.style.transform = 'rotate(180deg)';
	} else {
		console.log(`NIE OK!`);
		arrowIcon.style.transform = 'rotate(0)';
	}
}

btn.addEventListener('click', showMe);
