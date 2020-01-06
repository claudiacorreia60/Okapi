'use strict'

const axios = require('axios')
const Env = use('Env')

class ItemController {
    indexMan ({request, response}){
        const params = request.get()

        return axios.get(`${Env.get('CATALOG_MS')}/catalog/man`, {params})
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

    indexWoman ({request, response}){
        const params = request.get()
        
        return axios.get(`${Env.get('CATALOG_MS')}/catalog/woman`, {params})
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

    show ({request, response, params :{item_id}}){
        return axios.get(`${Env.get('CATALOG_MS')}/catalog/${item_id}`)
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

module.exports = ItemController