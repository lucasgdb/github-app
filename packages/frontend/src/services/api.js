import axios from 'axios'

const api = axios.create({ baseURL: '/api' })
const github_api = axios.create({ baseURL: 'https://api.github.com/users' })

export { github_api }
export default api
