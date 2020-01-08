'use strict'

const axios = require('axios')
const Env = use('Env')

class AdviserController {
    suggest ({request, response}){
        const params = request.get()

        return axios.get(`${Env.get('ADVISER_MS')}/sugest_outfit` , {params})
            .then(data => {
                return response.json(data.data)
            })
            .catch(err => {
                return response.json(err)
            })
    }
}

module.exports = AdviserController
