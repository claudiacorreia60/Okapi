'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')
const axios =require('axios')

class ConvertEmptyStringsToNull {
  async handle ({ request, params:{user_id} }, next) {
    var user = await axios.get(`${Env.get('USER_MS')}/users/${user_id}`)
                          .then(data => {return data.data})
                          .catch(err => {return null}) 

    if (!user) {
        var e = new Error('User not found')
        e.name = "UserNotFound"
        throw e
    }

    await next()                                        
  }
}

module.exports = ConvertEmptyStringsToNull
