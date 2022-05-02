import { fetchText } from './fetch';
const getProducts = "http://localhost:5000/api/GetItems"

const fetchProducts = (productID) => fetchText(getProducts.concat(productID))

export const productAPI = {
    fetchProducts
}