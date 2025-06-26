import axios from "axios";

export const URL = 'https://dnkserver.com/'

// export const URL = 'https://backendserver.dnkre.com/'

// export const URL = 'http://13.232.208.251/';

// export const URL = 'http://localhost:8800/';



const axiosPrivate = axios.create({
    baseURL: URL,
    withCredentials: true,
})

export default axiosPrivate