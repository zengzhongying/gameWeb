import api from './axios'

const getUser = function () {
    return api.get('/getUserInfo')
}

export default {
    getUser
}