import axios from "axios";

// API com requisição-> https://sujeitoprogramador.com/r-api/?api=filmes
const api = axios.create({
    baseURL: "https://sujeitoprogramador.com"
});

export default api;