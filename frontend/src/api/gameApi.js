import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL + '/api',
    headers: {
        Accept: 'application/json',
    }
});

export default api;
