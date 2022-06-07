import axios from "axios"

const BASE_URL = "http://localhost:5000/"
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdmM2IwOTVhYjI4MjJjMWJmM2Q4NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDYzNjMyNiwiZXhwIjoxNjU0ODk1NTI2fQ.akEfD45DZJ0CJKuoCMfXa7ZGOwcYHAO3Ifql25AEVVY"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})