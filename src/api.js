import axios from 'axios';

const config =  {
    baseURL:"http://13.59.145.218:5000",
}
const api = axios.create(config);

export const movieApi = {
    getMovieList : () => api.get("/movie/list"),
    register : (oid) =>  api.get(`/movie/register/${oid}`),
    unregister: (oid) => api.get(`/movie/unregister/${oid}`),
    getFavorite: () => api.get('/movie/user-favorite'),
    getMovieSynopsys: (naver_code)=> api.get(`/movie/detail/${naver_code}`),
};


