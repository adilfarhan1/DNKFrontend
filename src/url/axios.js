import axios from "axios";




export const URL = 'http://localhost:8800/';
// export const URL = 'https://damcproperties.com/'

const axiosPrivate = axios.create({
    baseURL: URL,
    withCredentials: true,
})

export default axiosPrivate