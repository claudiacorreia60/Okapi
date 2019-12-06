'use strict'

class TestController {
  async test({
    request,
    auth,
    response
  }) {
    const jwt = require('jsonwebtoken')
    const Env = use('Env')

    const encrypted_token = request.header('authorization').slice(7)

    try {
      const token = jwt.verify(encrypted_token, Env.get('APP_KEY'), {
        algorithms: ['HS256']
      })

      return response.send(token)
    } catch (error) {
      return response.send('Missing or invalid jwt token')
    }
  }
}

module.exports = TestController
