'use strict'

const axios = require('axios')
const Env = use('Env')

class AdviserController {
    suggest ({request, response}){
        const params = request.get()

        return axios.get(`${Env.get('ADVISER_MS')}/sugest_outfit` , {params})
            .then(res => {
                var promises = []

                delete res.data.score 
                
                Object.values(res.data).forEach(async item => {
                    promises.push(axios.get(`${Env.get('CATALOG_MS')}/catalog/${item.item_id}`))
                });

                return axios.all(promises)
                            .then(data => {
                                var data_final = data.map(x => {
                                    return x.data
                                })
                                return response.json(data_final)
                            })
            })
            .catch(err => {
                return response.json(err)
            })
    }

    rate ({request, response}){
        const body = request.post()

        return axios.post(`${Env.get('ADVISER_MS')}/rate_outfit` , body)
            .then(res => {
                return response.json(res)
            })
            .catch(err => {
                return response.json(err)
            })
    }
}

module.exports = AdviserController
