import axios from 'axios';

// Configure o Axios para usar a URL da API
const api = axios.create({
    baseURL: 'http://localhost:3500', // Substitua pela URL real da sua API
    timeout: 5000,
});

export default api;