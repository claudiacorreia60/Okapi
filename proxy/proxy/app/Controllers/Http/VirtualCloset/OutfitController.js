'use strict'

const axios = require('axios')
const Env = use('Env')

class OutfitController {

    show ({request, response, params: {user_id, outfit_id}}){
        return axios.get(`${Env.get('VIRTUAL_CLOSET_MS')}/outfit/${user_id}/${outfit_id}`)
                    .then(async res => {

                        var promises = []
                        var outfits = []

                        res.data.forEach(async item => {
                            promises.push(axios.get(`${Env.get('CATALOG_MS')}/catalog/${item.item_id}`)
                                                                     .then(data => data.data))
                        })


                        outfits = await axios.all(promises)

                        return response.json(outfits)

                    })
                    .catch(err => {

                        //let status = err.status
                        let data = err

                        return response.json(err)
                    })
    }

    addOutfit ({request, response, params: {user_id}}){
        const body = request.post()

        return axios.post(`${Env.get('VIRTUAL_CLOSET_MS')}/outfit/${user_id}`, body)
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

    removeOutfit ({request, response, params: {user_id, outfit_id}}){

        return axios.delete(`${Env.get('VIRTUAL_CLOSET_MS')}/outfit/${user_id}/${outfit_id}`)
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

module.exports = OutfitController
