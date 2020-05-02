const servers = {
    products: `http://${process.env.REACT_APP_SERVER_PRODUCTS_HOST}:${process.env.REACT_APP_SERVER_PRODUCTS_PORT}`,
    warehouses: `http://${process.env.REACT_APP_SERVER_WAREHOUSES_HOST}:${process.env.REACT_APP_SERVER_WAREHOUSES_PORT}`
}

export const productsUrl = servers.products
export const warehousesUrl = servers.warehouses