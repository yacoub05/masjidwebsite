import axios  from 'axios';  

const api = axios.create({
    baseURL:'http://api.aladhan.com/v1'
})

export default api;