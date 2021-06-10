import axios from "axios";

export default axios.create({
    baseURL: 'http://sebasgx-001-site1.itempurl.com/api',
    headers: { 'Content-type':'application/json' }
})