'use strict'

const jwt = require('jsonwebtoken')
const Env = use('Env')
const axios = require('axios')

class ConvertEmptyStringsToNull {
  async handle ({ request, response }, next) {
    const access_token = JSON.parse(request.header('access_token'))
    const encrypted_token = access_token.token
    const headers = request.headers()

    try {
      const token = jwt.verify(encrypted_token, Env.get('APP_KEY'), {
        algorithms: ['HS256'],
        complete: true
      })

      await next()
    } catch (err) {

      if (err.name == "TokenExpiredError") {
        return axios.post(`${Env.get('AUTH_MS')}/refresh`, null, {headers})
             .then(async token => {
               console.log('New token.')
               response.header('acess_token', token.data.access_token)
               await next()
             })
      } else {
        return response.status(401).json({
          message: 'Invalid token.'
        })
      }
    }


                       
                                      
  }
}

module.exports = ConvertEmptyStringsToNull
