import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"
import { checkFilter } from "./filters"

const price = () => {
    const min = document.getElementById('min')
    const max = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')


    min.addEventListener('input', () => {
        getData().then((data) => {
			    renderGoods(priceFilter(checkFilter(data, checkboxInput.checked), min.value, max.value))
		})
        
    })
    max.addEventListener('input', () => {
        getData().then((data) => {
			    renderGoods(priceFilter(checkFilter(data, checkboxInput.checked), min.value, max.value))
		})
        
    })
    checkboxInput.addEventListener('change', () => {
      if (checkboxInput.checked) {
          checkboxSpan.classList.add('checked')
      } else {
        checkboxSpan.classList.remove('checked')
      }
      getData().then((data) => {
        renderGoods(priceFilter(checkFilter(data, checkboxInput.checked), min.value, max.value))
      })
        
    


    }) 


}

export default price