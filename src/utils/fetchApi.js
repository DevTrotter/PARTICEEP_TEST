import axios from 'axios'

//-----LOCAL URL-----
/* const URL = 'http://localhost:2500'  */

//-----API DEPLOY URL-----
const URL = 'https://api.themoviedb.org/3/movie/'

export const fetchApi = (config) => {
  //interceptors handle network error
    axios.interceptors.response.use(
        (response) => {
        return response;
        },
        
        function (error) {
        if (!error.response) {
            error.response = {
            data: 'net work error',
            status: 500
            }
        }
        return Promise.reject(error);
        });

    config.baseURL = URL
    return axios(config)
}