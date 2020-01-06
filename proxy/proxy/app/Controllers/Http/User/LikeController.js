'use strict'

const axios = require('axios')
const Env = use('Env')

class LikeController {
    async showByUser ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('USER_MS')}/likes/${user_id}`)
                    .then(res => {

                        var promises = []

                        res.data.forEach(async item => {
        
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
                        console.log(err)
                        let status = err.response.status
                        let data = err.response.data

                        return response.status(status)
                                       .json(data)
                    })
    }

    likeItem ({request, response, params: {user_id, item_id}}){
        return axios.post(`${Env.get('USER_MS')}/likes/${user_id}/${item_id}`, request.post())
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

    dislikeItem ({request, response, params: {user_id, item_id}}){
        return axios.delete(`${Env.get('USER_MS')}/likes/${user_id}/${item_id}`)
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

module.exports = LikeController
