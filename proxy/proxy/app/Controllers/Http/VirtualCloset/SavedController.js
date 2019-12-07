'use strict'

const axios = require('axios')
const Env = use('Env')

class SavedController {
    indexByUser ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('VIRTUAL_CLOSET_MS')}/saved/${user_id}`)
                    .then(res => {

                        var promises = []

                        res.data.data.forEach(async item => {
        
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

                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    addToSaved ({request, response, params: {user_id, item_id}}){

        return axios.post(`${Env.get('VIRTUAL_CLOSET_MS')}/saved/${user_id}/${item_id}`)
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

    removeFromSaved ({request, response, params: {user_id, item_id}}){

        return axios.delete(`${Env.get('VIRTUAL_CLOSET_MS')}/saved/${user_id}/${item_id}`)
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

module.exports = SavedController
