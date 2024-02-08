const author = {
    name: "David",
    lastname: "Angarita"
}

const itemMapper = (item) => {
    const {
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        shipping,
        category_id,
        sold_quantity,
        pictures,
    } = item;
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: price.toFixed(2)
        },
        picture: pictures ? pictures[0].url : thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        category_id
    };
};

const itemDetailMapper = (item) => {
    const {sold_quantity} = item;
    const itemDetail = itemMapper(item);
    return {
        author,
        item: {
            ...itemDetail,
            sold_quantity
        }
    }
}

const itemListMapper = (items, categories) => {
    return {
        author,
        categories: categories
            ? categories.values[0].path_from_root.map(category => category.name)
            : [],
        items: items.slice(0, 4).map(item => itemMapper(item))
    };
};

module.exports = {itemMapper: itemMapper, itemListMapper: itemListMapper, itemDetailMapper: itemDetailMapper};