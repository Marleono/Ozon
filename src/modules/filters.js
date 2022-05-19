export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase.includes(value.toLowerCase)
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const priceFilter = (goods, value1, value2) => {
    return goods.filter((goodsItem, value1, value2) => {
        if (value1 <= goodsItem.price <= value2) {
            return goodsItem
        }
    })
}
