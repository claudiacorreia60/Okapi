'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')

class ConvertEmptyStringsToNull {
  async handle ({ request }, next) {
    const access_token = JSON.parse(request.header('access_token'))
    const encrypted_token = access_token.token

    const token = jwt.verify(encrypted_token, Env.get('APP_KEY'), {
                                                        algorithms: ['HS256'],
                                                        complete: true
                                                    })
                       
                                          
    await next()
  }
}

module.exports = ConvertEmptyStringsToNull
