import axios from 'axios'
const baseURL = process.env.REACT_APP_BASE_URL
const instance = axios.create({
  baseURL,
  timeout: 10000
})

// Adding a request interceptor
// instance.interceptors.request.use(function (config) {
//   return {
//     ...config,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('admin_token')}`
//     }
//   }
// })

// Common function to get acctual data from response
const responseBody = response => response.data

const adminrequests = {
  get: url => instance.get('/library/admin' + url).then(responseBody),
  post: (url, body) =>
    instance.post('/library/admin' + url, body).then(responseBody),
  patch: (url, body) =>
    instance.patch('/library/admin' + url, body).then(responseBody),
  delete: url => instance.delete('/library/admin' + url).then(responseBody)
}

export default adminrequests
