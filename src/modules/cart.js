const cart = () => {
	const cartBtn = document.getElementById('cart')
	const modalCart = document.querySelector('.cart')
	const modalClose = document.querySelector('.cart-close')

	cartBtn.addEventListener('click', () => {
		modalCart.style.display = 'flex'
	})
	modalClose.addEventListener('click', () => {
		modalCart.style.display = ''
	})

}

export default cart