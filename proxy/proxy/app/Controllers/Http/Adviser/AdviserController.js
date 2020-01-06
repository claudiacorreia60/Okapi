'use strict'

class AdviserController {
    classify ({request, response}){
        return axios.post(`${Env.get('ADVISER_MS')}/classify_outfit` , request.post())
            .then(data => {
                return response.json(data.data)
            })
            .catch(err => {
                return response.json(err)
            })
    }

    advise ({request, response, params: {user_id}}){
        return axios.get(`${Env.get('ADVISER_MS')}/suggest_outfit/${user_id}` )
            .then(data => {
                return response.json(data.data)
            })
            .catch(err => {
                return response.json(err)
            })
    }
}

module.exports = AdviserController
