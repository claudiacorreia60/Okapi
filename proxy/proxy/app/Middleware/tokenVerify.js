'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')

class ConvertEmptyStringsToNull {
  async handle ({ request }, next) {
    const encrypted_token = request.request.headers.authorization.slice(7)
    const token = jwt.verify(encrypted_token, Env.get('APP_KEY'), {
                                                        algorithms: ['HS256'],
                                                        complete: true
                                                    })
                                                    
    await next()
  }
}

module.exports = ConvertEmptyStringsToNull
