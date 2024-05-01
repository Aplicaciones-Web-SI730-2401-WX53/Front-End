import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  headers:{
    'Authorization' : 'Bearer '+  localStorage.getItem('jwt')
    }
})

export class UserApiServices {
  getByid(id) {
    return http.get('users/' + id)
  }
  async getAll() {
    return await http.get('products')
  }
  create(body) {
    return http.post('users', body)
  }
  update(body, id) {
    return http.put('users/' + id, body)
  }
  delete(id) {
    return http.delete('users/' + id)
  }
}
