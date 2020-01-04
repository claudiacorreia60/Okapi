'use strict'

const axios = require('axios')
const Env = use('Env')

class UserController {
    index({request, response}){
        return axios.get(`${Env.get('USER_MS')}/users/`)
                    .then(res => {

                        return response.json(res.data)

                    })
                    .catch(err => {

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    show ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('USER_MS')}/users/${user_id}`)
                    .then(res => {

                        return response.json(res.data)

                    })
                    .catch(err => {

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    store ({request, response}){
        return axios.post(`${Env.get('USER_MS')}/users/`, request.post())
                    .then(res => {

                        return response.json(res.data)

                    })
                    .catch(err => {

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    update ({request, response, params: {user_id}}){
        return axios.put(`${Env.get('USER_MS')}/users/${user_id}`, request.post())
                    .then(res => {

                        return response.json(res.data)

                    })
                    .catch(err => {

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    delete ({request, response, params: {user_id}}){
        return axios.delete(`${Env.get('USER_MS')}/users/${user_id}`)
                    .then(res => {

                        return response.json(res.data)

                    })
                    .catch(err => {

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

}

module.exports = UserController
