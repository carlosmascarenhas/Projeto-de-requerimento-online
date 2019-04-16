const troca = [...document.querySelectorAll('.botao')]

troca.forEach(item => {
	item.addEventListener('click', function() {
		troca.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})
