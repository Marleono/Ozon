import renderCart from "./renderCart"
import postData from './postData'

const cart = () => {
	const cartBtn = document.getElementById('cart')
	const modalCart = document.querySelector('.cart')
	const modalClose = modalCart.querySelector('.cart-close')
	const cartTotal = modalCart.querySelector('.cart-total > span')
	const cartSendBtn = modalCart.querySelector('.cart-confirm')
	const goodsWrapper = document.querySelector('.goods')
	const cartWrapper = document.querySelector('.cart-wrapper')


	cartBtn.addEventListener('click', () => {
		const cart = localStorage.getItem('cart') ? 
				JSON.parse(localStorage.getItem('cart')) : []
		modalCart.style.display = 'flex'

		renderCart(cart)
		cartTotal.textContent = cart.reduce((sum, goodItem) => {
			return sum + goodItem.price
		}, 0)
	})
	modalClose.addEventListener('click', () => {
		modalCart.style.display = ''
	})

	goodsWrapper.addEventListener('click', (event) => {
		if (event.target.classList.contains('btn-primary')) {
			const card = event.target.closest('.card')
			const key = card.dataset.key
			const goods = JSON.parse(localStorage.getItem('goods'))
			const cart = localStorage.getItem('cart') ? 
				JSON.parse(localStorage.getItem('cart')) : []

			const goodItem = goods.find((item) => {
				return item.id === +key
			})

			cart.push(goodItem)

			localStorage.setItem('cart', JSON.stringify(cart))
		}
	})

	cartWrapper.addEventListener('click', (event) => {
		if (event.target.classList.contains('btn-primary')) {
			const cart = localStorage.getItem('cart') ? 
				JSON.parse(localStorage.getItem('cart')) : []
			const card = event.target.closest('.card')
			const key = card.dataset.key
			const index = cart.findIndex((item) => {
				return item.id === +key
			})

			cart.splice(index, 1)

			localStorage.setItem('cart', JSON.stringify(cart))

			renderCart(cart)
			cartTotal.textContent = cart.reduce((sum, goodItem) => {
				return sum + goodItem.price
			}, 0)
		}
			
	})

	cartSendBtn.addEventListener('click', () => {
		const cart = localStorage.getItem('cart') ? 
				JSON.parse(localStorage.getItem('cart')) : []

		postData(cart).then(() => {
			localStorage.removeItem('cart')

			renderCart([])
			cartTotal.textContent = 0
		})
	})

}

export default cart