import api from './axios'

const getUser = function () {
    return api.get('/getUserInfo')
}

const getUserName = function (obj) {
    return api.post('/getUserName', obj)
}

export default {
    getUser,
    getUserName
}