import axios from "axios"
const API_URL = 'https://6598d30ca20d3dc41ceefd10.mockapi.io/'

const axioss=axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export default axioss