import axios from 'axios';
import Cookies from 'js-cookie';

// Configure o Axios para usar a URL da API
const api = axios.create({
    baseURL: 'http://localhost:3500', // Substitua pela URL real da sua API
    timeout: 5000,
});

api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token'); // Recupere o token dos cookies
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;