'use strict'

const axios = require('axios')
const Env = use('Env')

class OutfitController {

    show ({request, response, params: {user_id, outfit_id}}){
        return axios.get(`${Env.get('VIRTUAL_CLOSET_MS')}/outfit/${user_id}/${outfit_id}`)
                    .then(async res => {

                        var promises = []
                        var outfits = []

                        res.data.items.forEach(async item => {
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

    indexByUser ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('VIRTUAL_CLOSET_MS')}/outfit/${user_id}`)
                    .then(async res => {

                        var promises = {}
                        var outfits = {}

                        res.data.forEach(async outfit => {
                            promises[outfit.outfit_id] = []

                            outfit.items.forEach(async item => {
                                promises[outfit.outfit_id].push(axios.get(`${Env.get('CATALOG_MS')}/catalog/${item.item_id}`)
                                                                     .then(data => data.data))
                            })

                        });


                        for (let i = 0; i < Object.keys(promises).length; i++) {
                            let key = Object.keys(promises)[i]
                            outfits[key] = await axios.all(promises[key])
                        }

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
