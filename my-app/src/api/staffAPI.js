import { fetchJson, fetchText } from './fetch';
export const getStaff = "http://localhost:5000/api/GetAllStaff"
const getCard = "http://localhost:5000/api/GetCard/"

const fetchStaff = async () => await fetchJson(getStaff);

const fetchCard = (staffID) => fetchText(getCard.concat(staffID))

export const staffAPI = {
    fetchStaff,
    fetchCard,
}