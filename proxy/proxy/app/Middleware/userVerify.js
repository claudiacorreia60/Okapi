'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')

class ConvertEmptyStringsToNull {
  async handle ({ request, params:{user_id} }, next) {
    const encrypted_token = request.request.headers.authorization.slice(7)
    const token = jwt.verify(encrypted_token, Env.get('APP_KEY'), {
                                                        algorithms: ['HS256'],
                                                        complete: true
                                                    })
                                                    
    if (token.payload.user_id != user_id) {
        var e = new Error('Not enough permissions.')
        e.name = "PermissionError"
        throw e
    } 
                                                    
    await next()
  }
}

module.exports = ConvertEmptyStringsToNull
