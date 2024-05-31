const galleryItems = document.querySelectorAll('.gallery__item')
const galleryMultiplier = document.querySelectorAll('.gallery__multiplier')

const fullSizeItem = document.querySelector('.fullsize__item')
const fullSizeMultiplier = document.querySelector('.fullsize__multiplier')

const refEl = document.querySelector('.gallery__standard');
const refElWidth = 100;
const refRes = () => getComputedStyle(document.documentElement).getPropertyValue('--refRes')

function updateWidthText(el) {
	const width = el.offsetWidth
	el.textContent = `${width}px`
}

function updateMultiplier() {
	galleryMultiplier.forEach(item => item.textContent = (refEl.offsetWidth / refElWidth).toFixed(1) + 'x')
	fullSizeMultiplier.textContent = (fullSizeItem.offsetWidth / refRes()).toFixed(1) + 'x'
}
function initiateText() {
	galleryItems.forEach(updateWidthText)
	updateWidthText(fullSizeItem)
	updateMultiplier()
}

initiateText()

window.addEventListener('resize', () => {
	initiateText()
})




