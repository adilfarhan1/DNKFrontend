import axios from "axios";

export const URL = 'https://dnkserver.com/'

// export const URL = 'https://damcproperties.com/'

// export const URL = 'http://localhost:8800/';



const axiosPrivate = axios.create({
    baseURL: URL,
    withCredentials: true,
})

export default axiosPrivate