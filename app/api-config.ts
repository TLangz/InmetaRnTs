import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.0.2.2:5000/', // Android emulator
    //baseUrl: 'http://localhost:5000', // iOS emulator
})