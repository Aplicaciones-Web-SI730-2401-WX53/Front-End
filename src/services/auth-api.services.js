
import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000'
})
export class AuthApiServices{
    login(body){
        return http.get('/auth/login',body)
    }
}