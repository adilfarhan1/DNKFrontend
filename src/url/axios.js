import axios from "axios";

export const URL = 'https://dnkserver.com/'

// export const URL = 'https://backendserver.dnkre.com/'

// export const URL = 'https://live.dnkre.com/';

// export const URL = 'http://localhost:8800/';



const axiosPrivate = axios.create({
    baseURL: URL,
    withCredentials: true,
})

export default axiosPrivate