'use strict'

const axios = require('axios')
const Env = use('Env')

class LikeController {
    showByUser ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('USER_MS')}/likes/${user_id}`)
                    .then(res => {

                        const items = []

                        res.data.data.forEach(elem => {
                            // TODO: axios get Items from catalog
                            items.push(elem.item_id)
                        });

                        return response.json({items})

                    })
                    .catch(err => {

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
