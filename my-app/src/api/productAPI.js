import { fetchJson } from './fetch';
const getProductsURL = "http://localhost:5000/api/GetItems/"

const fetchProducts = (productID) => {
    return fetchJson(`${getProductsURL}${productID}`)
}

export const productAPI = {
    fetchProducts
}