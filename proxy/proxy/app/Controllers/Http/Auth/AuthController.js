'use strict'

const axios = require('axios')
const Env = use('Env')

class AuthController {
    login ({request, response}){
        return axios.post(`${Env.get('AUTH_MS')}/login` , request.post())
            .then(data => {
                return response.json(data.data)
            })
            .catch(err => {
                return response.json(err)
            })
    }

    register ({request, response}) {
        return axios.post(`${Env.get('AUTH_MS')}/register` , request.post())
             .then(data => {
                return response.json(data.data)
             })
             .catch(err => {
                 return response.json(err)
             })
    }

    refresh({request,response}) {
        const headers = request.headers()
        return axios.post(`${Env.get('AUTH_MS')}/refresh` , null, {headers})
            .then(data => {
                return response.json(data.data)
            })
            .catch(err => {
                return response.json(err)
            })
    }
}

module.exports = AuthController
