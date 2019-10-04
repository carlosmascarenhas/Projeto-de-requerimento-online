/*função de troca dos formulários*/
const troca = [...document.querySelectorAll('.botao')]

troca.forEach(item => {
	item.addEventListener('click', function () {
		troca.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


const passa = [...document.querySelectorAll('.botao-mobile')]

passa.forEach(item => {
	item.addEventListener('click', function () {
		passa.forEach(item => item.parentElement.classList.remove('no-active'))
		this.parentElement.classList.add('no-active')
	})
})





