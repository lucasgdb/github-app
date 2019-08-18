import axios from 'axios';

const api = axios.create({ baseURL: '/api' });
const githubApi = axios.create({ baseURL: 'https://api.github.com/users' });

export { githubApi };
export default api;
