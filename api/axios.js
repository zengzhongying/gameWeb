import axios from 'axios' //引用axios
import router from '../src/router';

axios.defaults.timeout = 3000;
axios.defaults.baseURL = 'proxyApi'
axios.defaults.headers.get['Content-Type'] = 'application/json;charse=UTF-8'
axios.defaults.headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}
axios.interceptors.request.use(
    config => {
        // if (config.method == 'get') {
        //     config.data = { unused: 0 }
        // }
        config.data = JSON.stringify(config.data);
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

axios.interceptors.response.use(
    response => {

        if (response.status == 401) {
            router.push({
                path: '/login'
            })
        }
        console.log('response', response)
        return response;
    },
    err => {
        return Promise.reject(err)
    }
)


export default {
    get(url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                param: param,
                responseType: 'application/json'
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })

    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                data: data
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}