const getData = (str) => {
		return fetch('https://test-1fce9-default-rtdb.firebaseio.com/goods.json')
  			.then((response) => {
  				return response.json()
  			})
}

export default getData