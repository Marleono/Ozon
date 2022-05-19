import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"

const price = () => {
    const min = document.getElementById('min')
    const max = document.getElementById('max')


    min.addEventListener('input', (event) => {
        const value1 = event.target.value
        getData().then((data) => {
			renderGoods(priceFilter(data, value1))
		})
        
    })
    max.addEventListener('input', (event) => {
        const value2 = event.target.value
        getData().then((data) => {
			renderGoods(priceFilter(data, value2))
		})
        
    })
}

export default price