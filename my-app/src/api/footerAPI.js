import { fetchText } from './fetch';
const getVersionURL = "http://localhost:5000/api/GetVersion"

const fetchVersion = () => {
    return fetchText(getVersionURL)
}

export const footerAPI = {
    fetchVersion
}